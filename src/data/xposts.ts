export interface XPost {
  id: string;
  text: string;
  date: string; 
  url: string;
  tags?: string[];
}

interface XPostInput {
  url: string;
  title: string;
  tags?: string[];
}

const TWITTER_EPOCH = BigInt(1288834974657);

function idFromUrl(url: string): string {
  const match = url.match(/status\/(\d+)/);
  if (!match) {
    throw new Error(`xposts.ts: couldn't find a status ID in URL: ${url}`);
  }
  return match[1];
}

function dateFromId(id: string): string {
  const ms = Number((BigInt(id) >> BigInt(22)) + TWITTER_EPOCH);
  return new Date(ms).toISOString().slice(0, 10);
}

function toXPost({ url, title, tags }: XPostInput): XPost {
  const id = idFromUrl(url);
  return { id, text: title, date: dateFromId(id), url, tags };
}

const inputs: XPostInput[] = [
  {
    url: "https://x.com/compileartisan/status/2043945331721994535",
    title: "Touch Typing Update",
    tags: ["typing", "story"],
  },
  {
    url: "https://x.com/compileartisan/status/2064247324612935830",
    title: "Java Learning Update",
    tags: ["tech"],
  },
];

export const xposts: XPost[] = inputs.map(toXPost);
