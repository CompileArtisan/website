import raw from "../data/xposts.json";

export interface XPost {
  id: string;
  text: string;
  date: string; 
  url: string;
  tags?: string[];
}

const TWITTER_EPOCH = BigInt(1288834974657);

function idFromUrl(url: string): string {
  const match = url.match(/status\/(\d+)/);
  if (!match) {
    throw new Error(`xposts.json: couldn't find a status ID in URL: ${url}`);
  }
  return match[1];
}

function dateFromId(id: string): string {
  const ms = Number((BigInt(id) >> BigInt(22)) + TWITTER_EPOCH);
  return new Date(ms).toISOString().slice(0, 10);
}

export const xposts: XPost[] = raw.map(({ url, title, tags }) => {
  const id = idFromUrl(url);
  return { id, text: title, date: dateFromId(id), url, tags };
});
