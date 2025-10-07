import { slug } from "github-slugger";
import { marked } from "marked";

// slugify
export const slugify = (content: string) => slug(content);

// markdownify (safe)
export const markdownify = (content?: string | null, div?: boolean) => {
  const text = typeof content === "string" ? content : "";
  const markdownContent = div ? marked.parse(text) : marked.parseInline(text);
  return { __html: markdownContent };
};

// humanize
export const humanize = (content?: string | null) => {
  const text = typeof content === "string" ? content : "";
  return text
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[a-z]/, (m) => m.toUpperCase());
};

// titleify
export const titleify = (content?: string | null) => {
  const humanized = humanize(content);
  return humanized
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// plainify (safe)
export const plainify = (content?: string | null) => {
  const text = typeof content === "string" ? content : "";
  const parseMarkdown: string = marked.parse(text); // synchronous
  const filterBrackets = parseMarkdown.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  return htmlEntityDecoder(filterSpaces);
};

// strip HTML entities
const htmlEntityDecoder = (htmlWithEntities: string): string => {
  const entityList: Record<string, string> = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
  };
  return htmlWithEntities.replace(
    /(&nbsp;|&lt;|&gt;|&amp;|&quot;|&#39;)/g,
    (entity) => entityList[entity] || ""
  );
};
