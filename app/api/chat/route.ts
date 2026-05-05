import { NextRequest, NextResponse } from "next/server";

const RATE_MAX = 30;
const RATE_WINDOW_MS = 60_000;
const rateStore = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (rateStore.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) return true;
  recent.push(now);
  rateStore.set(ip, recent);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (limited(ip)) {
      return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "Server not configured" }, { status: 500 });

    const body = await req.json();
    const { systemPrompt, history, userText } = body ?? {};
    if (!systemPrompt || !userText) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: [...(history ?? []), { role: "user", parts: [{ text: userText }] }],
        generationConfig: { maxOutputTokens: 700, temperature: 0.5 },
      }),
    });

    const data = await res.json();
    if (!res.ok) return NextResponse.json({ error: data?.error?.message ?? "Gemini error" }, { status: res.status });

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? "";
    return NextResponse.json({ text });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
