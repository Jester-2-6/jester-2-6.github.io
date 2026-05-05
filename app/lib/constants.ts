export const GITHUB_USERNAME = "chinthana-w";

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export type TimelineItemType = "work" | "education";

export interface TimelineItem {
  type: TimelineItemType;
  period: string;
  title: string;
  organization: string;
  location: string;
  highlights: string[];
}

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    type: "education",
    period: "2022 – Exp. Aug 2026",
    title: "Masters in Electrical & Computer Engineering",
    organization: "Southern Illinois University Carbondale",
    location: "Carbondale, IL",
    highlights: [
      "GPA: 4.0/4.0",
      "Building a simulation-aware AI solver for circuit testing that combines circuit constraints, simulator feedback, and neural models to reduce repeated test-generation effort.",
      "Built LUTorch, a C++/CUDA PyTorch extension that approximates circuit behavior without keeping SPICE in the loop, exposing a Python API for fast experimentation and achieving ~95% agreement with circuit-level behavior.",
      "Manage the department UNIX system lab, provision Synopsys/Cadence EDA tools, and support research users.",
      "Set up and manage a containerized mini cluster using Docker, k3s, and TrueNAS for automated provisioning and redundancy.",
    ],
  },
  {
    type: "work",
    period: "Mar 2020 – May 2023",
    title: "Logistics Engineering Team Lead & Senior Software Engineer",
    organization: "Cut+Dry",
    location: "San Jose, CA (Remote)",
    highlights: [
      "Owned production features for the Track+ logistics platform across React, React Native, TypeScript, GraphQL, and AWS-backed services.",
      "Took work from requirements through implementation, testing, deployment, production debugging, and user feedback.",
      "Built user-facing workflows for real-time logistics operations, working directly with product, operations, and end users to turn ambiguous field problems into shipped improvements.",
      "Improved engineering quality through Git-based code reviews, CI/CD workflows, automated tests, documentation, and release validation.",
      "Took on additional ownership in a small engineering team, including task planning, technical documentation, mentoring newer contributors, and coordinating fixes across product and operations.",
    ],
  },
  {
    type: "education",
    period: "2015 – Feb 2020",
    title: "B.Sc. (Hons) in Electronic & Telecommunication Engineering",
    organization: "University of Moratuwa",
    location: "Katubedda, Sri Lanka",
    highlights: [
      "GPA: 3.42/4.2",
      "Gained strong foundations in electrical power systems, signals, and communications.",
      "Worked extensively with advanced hardware design and low-level software, including bare-metal C and custom assembly on FPGA platforms.",
    ],
  },
  {
    type: "work",
    period: "Jul 2017 – Apr 2018",
    title: "Software Engineering Intern — ML Systems",
    organization: "Wave Computing",
    location: "Santa Clara, CA (Remote)",
    highlights: [
      "Developed C/C++ and Python components for WavePy, a compiler and simulator for a custom multi-core architecture.",
      "Built a hardware abstraction layer that allowed Python workflows to interface with lower-level C-based chip APIs.",
      "Worked with hardware engineers in Linux-based environments to validate algorithms, debug simulator behavior, and identify root causes before silicon availability.",
      "Wrote maintainable object-oriented code and testable software components for early-stage ML systems tooling.",
    ],
  },
];

export const SKILLS = [
  { category: "Languages", items: ["Python", "C/C++", "TypeScript", "JavaScript", "SQL", "Verilog", "Assembly", "PHP", "Rust", "Java", "TCL"] },
  { category: "Software & Product", items: ["React", "React Native", "Next.js", "Node.js", "REST APIs", "GraphQL", "HTML/CSS", "SPAs"] },
  { category: "Systems, ASIC & EDA", items: ["Linux systems", "Verilog", "FPGA", "bare-metal C", "protocol design", "Synopsys/Cadence tools", "DFT concepts", "ATPG concepts", "simulator/debug tooling"] },
  { category: "Backend, Cloud & Infrastructure", items: ["AWS", "Docker", "Redis", "Kafka", "CI/CD", "k3s", "TrueNAS", "CMake", "Git"] },
  { category: "AI & ML Tooling", items: ["PyTorch", "CUDA", "C++/Python bindings", "RAG", "LangChain", "LLM-assisted coding", "tool-using AI workflows", "numerical debugging"] },
  { category: "Engineering Practice", items: ["End-to-end ownership", "production debugging", "code reviews", "automated testing", "release validation", "technical documentation", "root-cause analysis", "cross-functional execution"] },
];

export const NOTABLE_PROJECTS = [
  {
    title: "Simulation-Aware AI Solver for Circuit Testing",
    description:
      "AI-assisted circuit testing tool that combines circuit topology, 3-valued logic, and simulator feedback to guide automated test generation. The project explores how neural models can reduce repeated backtracking in ATPG-style workflows while preserving circuit-level consistency.",
    tags: ["Python", "PyTorch", "Circuit Testing", "ATPG", "DFT", "AI Tools", "Research"],
    href: "https://github.com/chinthana-w/s-imply",
    featured: true,
    image: "",
  },
  {
    title: "LUTorch — Memristor Crossbar Simulator",
    description:
      "C++/CUDA PyTorch extension for fast circuit-behavior approximation using precomputed lookup tables. LUTorch exposes MemConv2d and MemLinear-style modules for PyTorch workflows, reducing dependence on repeated SPICE-style simulation while preserving close agreement with circuit-level behavior.",
    tags: ["C++", "CUDA", "PyTorch", "Simulation", "ML Tooling", "Circuit Modeling", "Research"],
    href: "https://github.com/chinthana-w/LUTorch",
    featured: true,
    image: "",
  },
  {
    title: "Full-Stack Traffic Analysis Platform",
    description:
      "Cloud-native web application that ingests live video streams, runs computer-vision traffic analytics in Python, and surfaces results through a React SPA. Deployed on AWS with a fully automated CI/CD pipeline handling build, test, and zero-downtime release across cloud infrastructure.",
    tags: ["React", "Python", "AWS", "CI/CD"],
    href: "https://github.com/abrutech/vision-traffic",
    featured: false,
    image: "",
  },
  {
    title: "Edge-Vision Traffic Sensing System",
    description:
      "SoC implementation of a real-time traffic-sensing pipeline on a Xilinx Zynq-7 FPGA. Bare-metal C manages RTL-facing processing logic and timing-sensitive control, while Python handles higher-level coordination.",
    tags: ["Bare-metal C", "Python", "FPGA", "Zynq 7", "SoC"],
    href: "https://github.com/abrutech/vision-traffic-soc",
    featured: false,
    image: "",
  },
  {
    title: "Custom Serial Communication Bus",
    description:
      "Verilog HDL serial bus supporting up to 12 masters across 3 priority levels and 8 slaves. Features automatic baud-rate detection via a custom handshake protocol, split transactions, and priority arbitration—demonstrating the core principles behind SPI/I2C. Synthesized and validated across multiple interconnected physical FPGA boards.",
    tags: ["Verilog", "FPGA", "Protocol Design", "HDL"],
    href: "https://github.com/abrutech/system-bus",
    featured: false,
    image: "",
  },
  {
    title: "ABRUTECH Custom Processor & Compiler",
    description:
      "Full processor architecture built from scratch in Verilog and implemented on an Altera DE2-115 FPGA using only ~1,000 logic elements. The 16-instruction ISA executes in 2.2 clock cycles on average and includes a special Address Maker for zero-overhead 2D matrix traversal and a shift-register bank for fast linear convolution. A companion Python compiler translates the human-readable ISA to machine code, while a simulator enables remote debugging before flashing the FPGA.",
    tags: ["Assembly", "Verilog", "FPGA", "Computer Architecture", "Python"],
    href: "https://github.com/BlazeCode2/ABRUTECH_processor_automatic",
    featured: false,
    image: "",
  },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: `https://github.com/${GITHUB_USERNAME}`, icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chinthanaw", icon: "linkedin" },
  { label: "Email", href: "mailto:chinthana.w@siu.edu", icon: "email" },
];
