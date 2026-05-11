export interface BlogPostSummary {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

export const BLOG_POSTS: BlogPostSummary[] = [
  {
    slug: "how-i-made-my-own-research-group",
    title: "How I Made My Own Research Group: A Multi-Agent Experiment",
    date: "May 2026",
    summary:
      "A practical write-up on building a coordinator-first multi-agent workflow with LangGraph, Codex, Claude, and Gemini to handle ATPG-heavy research tasks with clear ownership, validation gates, and durable run artifacts.",
  },
];
