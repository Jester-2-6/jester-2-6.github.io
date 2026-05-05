import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";

export const metadata: Metadata = {
  title: "Chinthana Wimalasuriya | Software & Systems Engineer",
  description:
    "Software and systems engineer focused on production software, ASIC/EDA-adjacent workflows, ML tooling, and AI-assisted engineering tools.",
  keywords: [
    "Chinthana Wimalasuriya","Software Engineer","Systems Engineer","ASIC","DFT","EDA","ATPG","Full-Stack Systems","AI-Assisted Engineering Tools","ML Tooling","React","TypeScript","Python","PyTorch","CUDA","Verilog","FPGA","AWS","Synopsys","Cadence"
  ],
  authors: [{ name: "Chinthana Wimalasuriya" }],
  openGraph: {
    title: "Chinthana Wimalasuriya | Software & Systems Engineer",
    description: "Software and systems engineer building production software, ML tooling, ASIC/EDA-adjacent workflows, and AI-assisted engineering tools.",
    type: "website",
    url: "https://chinthana-w.github.io",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chinthana Wimalasuriya",
    url: "https://chinthana-w.github.io",
    jobTitle: "Software & Systems Engineer",
    description: "Software and systems engineer with experience in production software, ML tooling, ASIC/EDA-adjacent workflows, and AI-assisted engineering tools.",
    alumniOf: "Southern Illinois University Carbondale",
    knowsAbout: ["Software Engineering","Systems Engineering","ASIC/EDA Workflows","DFT Concepts","ATPG","Full-Stack Systems","ML Tooling","AI-Assisted Engineering Tools","React","TypeScript","Python","PyTorch","CUDA","Verilog","FPGA","AWS"]
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
