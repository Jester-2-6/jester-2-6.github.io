import React from "react";
import { GITHUB_USERNAME } from "@/app/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1d1d1f] mb-2">
          <span className="text-[#0071e3] font-mono text-xl mr-3">01.</span>
          About Me
        </h2>
        <div className="w-48 h-0.5 bg-[#d2d2d7] mb-12" />

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-4 text-[#1a1a1a] leading-relaxed">
            <p>
              I&apos;m a software engineer who works well at the boundary between product software, systems tooling, and hardware-aware engineering workflows. I like owning practical problems end to end: understanding the workflow, building the software, testing the release, and debugging what breaks.
            </p>
            <p>
              My professional background includes production full-stack work at Cut+Dry across React, React Native, TypeScript, GraphQL, and cloud-backed logistics workflows. My research and project work extends into ML systems, CUDA/PyTorch tooling, FPGA-based systems, circuit testing, and EDA tool infrastructure.
            </p>
            <p>
              I&apos;m currently pursuing an M.S. in Electrical &amp; Computer Engineering at Southern Illinois University Carbondale, where I work on simulation-aware AI for circuit testing and manage UNIX/EDA lab infrastructure supporting Synopsys/Cadence research users.
            </p>
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {[
                "Python / PyTorch",
                "C++ / CUDA",
                "Verilog / FPGA",
                "TypeScript / React",
                "AWS / Docker",
                "Linux / EDA Tools",
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-sm">
                  <span className="text-[#0071e3]">▹</span>
                  <span className="font-mono">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="w-56 h-56 rounded-xl bg-[#0071e3]/8 border-2 border-[#0071e3] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">👨‍💻</div>
                  <p className="text-[#0071e3] font-mono text-sm">
                    @{GITHUB_USERNAME}
                  </p>
                </div>
              </div>
              <div className="absolute -inset-1 rounded-xl bg-[#0071e3]/6 -z-10 group-hover:bg-[#0071e3]/12 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
