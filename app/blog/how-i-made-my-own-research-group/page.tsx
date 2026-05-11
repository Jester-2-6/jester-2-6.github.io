import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "How I Made My Own Research Group: A Multi-Agent Experiment",
  description:
    "A coordinator-first multi-agent orchestration workflow using LangGraph, Codex, Claude, and Gemini for ATPG-heavy research tasks.",
};

function WorkflowDiagram() {
  const nodeClass =
    "rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-sm font-medium text-[#1d1d1f] text-center";
  const arrowClass = "text-[#0071e3] text-lg leading-none";

  return (
    <div className="rounded-2xl border border-[#d2d2d7] bg-[#f8f8fc] p-6 my-10">
      <div className="grid gap-3 max-w-2xl mx-auto">
        <div className={nodeClass}>Goal arrives</div>
        <div className={arrowClass}>↓</div>
        <div className={nodeClass}>Coordinator classifies task</div>
        <div className={arrowClass}>↓</div>
        <div className={nodeClass}>Task packet written</div>
        <div className={arrowClass}>↓</div>
        <div className={nodeClass}>Persistent run directory created</div>
        <div className={arrowClass}>↓</div>
        <div className={nodeClass}>One or more coding agents run in parallel</div>
        <div className="grid md:grid-cols-2 gap-3">
          <div className={nodeClass}>Test coverage gate</div>
          <div className={nodeClass}>Quality review gate</div>
        </div>
        <div className={arrowClass}>↓</div>
        <div className={nodeClass}>Gate decision</div>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="rounded-xl border border-[#b7e0bc] bg-[#ecfff0] px-4 py-3 text-sm font-medium text-[#1d1d1f] text-center">
            Pass: Docs and results agent → summaries, artifacts, and logs recorded
          </div>
          <div className="rounded-xl border border-[#f0c2c2] bg-[#fff2f2] px-4 py-3 text-sm font-medium text-[#1d1d1f] text-center">
            Fail: Run marked failed or blocked
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MultiAgentExperimentPostPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-6">
        <article className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-[#0071e3] uppercase tracking-widest mb-4">
            May 2026 · Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-6">
            How I Made My Own Research Group: A Multi-Agent Experiment
          </h1>
          <div className="w-32 h-0.5 bg-[#d2d2d7] mb-10" />

          <div className="space-y-6 text-[#1a1a1a] leading-relaxed">
            <p>
              I am tackling a difficult ATPG-related problem on my own, and I thought: what if I had a team to help? That idea is now practical with modern multi-agent orchestration frameworks. I used LangGraph, coupled with Codex, Claude, and Gemini CLIs, to build a customized orchestration layer that reliably takes over the heavy lifting, effectively making me a supervisor instead of a worker.
            </p>
            <p>
              At its core, this project is about digital circuits, reconvergent paths, and the stubborn art of back implication. But the more interesting story is the orchestration layer around it: a workflow that behaves less like an improvising bot swarm and more like a disciplined studio crew. Each participant shows up on cue, does one job, and hands off cleanly before anyone starts freelancing.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-4">How It Is Built</h2>
            <p>
              The architecture is intentionally lightweight. The coordinator is implemented as plain Python functions and dataclasses, so the logic can be tested directly without depending on a giant framework mood swing. LangGraph can sit on top, but it is not the brain. It is more like a stage manager that knows where the props are and when to cue the actors.
            </p>
            <p>
              Each task becomes a packet. That packet names the owner, task type, files in scope, validation plan, and artifacts expected at completion. The task classifier is keyword-driven, which sounds simple because it is simple. That is the point. The system is meant to route work reliably, not hold philosophical debates about whether a change is more model than benchmark at 2 a.m.
            </p>
            <p>
              The runner builds the persistent side of the system. Every run gets its own directory under <code className="font-mono text-[#0071e3]">runs/orchestration/</code>, with a state file, agent prompt, event logs, and artifacts for later review. The workflow memory is boring in the best way: durable, inspectable, and easy to grep when something misbehaves.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-4">The Art of Competition</h2>
            <p>
              A single AI agent is prone to issues including goal drift, context-window limits, and the classic failure mode: hallucination. There is also a clear difference in what each provider does best. Claude is excellent at general-purpose coding, but has context and token limits. OpenAI models are strong on niche ATPG logic, but they also face context and token constraints. Gemini is weaker on raw logic and domain knowledge, yet it shines with a massive context window and generous token limits.
            </p>
            <p>
              The orchestration layer exploits these differences. It can run multiple Claude agents in parallel for implementation quality, use Codex with MCP tooling for ATPG analysis, and assign Gemini to broad-review duties with full-run context. This setup reduces hallucinations and keeps agents aligned to a shared quality target.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-4">How It Works</h2>
            <WorkflowDiagram />
            <figure className="rounded-2xl border border-[#d2d2d7] bg-[#f8f8fc] p-3 my-10">
              <Image
                src="https://github.com/user-attachments/assets/58a5648d-ff30-4d48-a541-8cc3bdbe3012"
                alt="Terminal monitor showing coordinated progress across multiple orchestration agents."
                width={1919}
                height={1079}
                className="w-full rounded-xl border border-[#d2d2d7]"
              />
              <figcaption className="text-sm text-[#6e6e73] mt-3 px-1">
                A showcase of how the system works with multiple agents in tandem.
              </figcaption>
            </figure>
            <p>
              The runtime follows staged flow. First come one or more coding agents, launched in parallel when needed. They receive a narrow goal, scoped file ownership boundaries, and explicit instructions to stop once ready for validation. This is not a go-fix-the-whole-repo setup. It is a take-this-slice, make-it-correct, and leave-breadcrumbs setup.
            </p>
            <p>
              Once coding completes, the gates take over. The test coverage gate checks whether the change is justified with tests and coverage evidence. The quality review gate checks repository rule compliance, regression risk, and unsupported claims. These gates can run in parallel because test feedback and code review do not need to wait in the same queue.
            </p>
            <p>
              Only after those gates pass does the docs-and-results agent enter. That final agent is not there to invent a narrative. It writes validated facts, updates documentation, and keeps the result trail current. The workflow also forwards sibling summaries into later stages, so downstream agents can build on previous findings instead of repeating investigations.
            </p>
            <p>
              The monitor layer closes the loop. The runtime can create a tmux session that tails parent and child event streams side by side, making the process feel less like blind automation and more like a readable control room.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-4">What The Framework Expects</h2>
            <p>
              The expectation is not raw autonomy. It is bounded autonomy with receipts.
            </p>
            <p>
              Each agent is expected to checkpoint progress, attach artifacts, and mark completion or blockage honestly. If a benchmark or ML job is involved, a run manifest is required before execution. If the work touches theory, the paper draft and project summary must stay in sync. If results are published to the canonical Notion page, only validated claims are allowed, with dated log entries showing commands, artifacts, and next steps.
            </p>
            <p>
              That sounds strict because it is strict. The strictness is useful: it prevents drifting into we-think-it-worked territory and pushes toward here-is-what-ran, here-is-what-changed, and here-is-the-proof.
            </p>
            <p>
              The underlying philosophy is straightforward: prefer narrow, testable slices over grand all-at-once interventions. The coordinator assigns responsibility, the runner records history, the gates enforce evidence, and the docs agent translates validated work into human-readable form.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-4">The Shape Of The Result</h2>
            <p>
              This project is not just a model, not just an ATPG system, and not just a benchmark harness. It is a structured collaboration loop around a technical core. The framework exists to keep that loop legible: route the task, isolate the slice, validate the change, record the evidence, and only then write the story.
            </p>
            <p>
              The key design choice is not many agents for spectacle. It is many agents because different kinds of work need different scrutiny. If one agent is a carpenter, another is a building inspector, and a third writes the sign on the front door, the result is usually better than letting one overconfident intern do all three jobs.
            </p>
            <p>
              The outcome is a workflow that is practical, auditable, and a little opinionated—which, for a project like this, is exactly the point.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-[#d2d2d7] flex flex-wrap gap-4">
            <Link href="/blog" className="text-[#0071e3] font-semibold hover:underline">
              ← Back to blog index
            </Link>
            <Link href="/" className="text-[#0071e3] font-semibold hover:underline">
              Back to homepage
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
