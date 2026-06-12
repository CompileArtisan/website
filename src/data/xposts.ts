export interface XPost {
  id: string;
  text: string;
  date: string;
  url: string;
  tags?: string[];
}

export const xposts: XPost[] = [
  {
    id: "1",
    text: "Touch Typing Update",
    date: "2026-04-14",
    url: "https://x.com/compileartisan/status/2043945331721994535",
    tags: ["typing", "story"],
  },
  {
    id: "2",
    text: "Java Learning Update",
    date: "2026-06-09",
    url: "https://x.com/compileartisan/status/2064247324612935830",
    tags: ["tech"],
  },
];
