import { slug } from "github-slugger";
import { marked } from "marked";

type Lang = "en" | "ar";

// slugify
export const slugify = (content: string) => {
  return slug(content);
};

// markdownify
export const markdownify = (content: string, div?: boolean) => {
  const markdownContent: any = div
    ? marked.parse(content)
    : marked.parseInline(content);
  return { __html: markdownContent };
};

// humanize
export const humanize = (content: string) => {
  return content
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
};

// titleify
export const titleify = (content: string) => {
  const humanized = humanize(content);
  return humanized
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// plainify
export const plainify = (content: string) => {
  const parseMarkdown: any = marked.parse(content);
  const filterBrackets = parseMarkdown.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterSpaces);
  return stripHTML;
};

// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities: string): string => {
  let entityList: { [key: string]: string } = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
  };
  return htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity: string) => entityList[entity]
  );
};

/**
 * Get the correct language field from a bilingual object
 * e.g. input: { title: "Hello", title_ar: "مرحبا" }, lang: "ar"
 * returns: "مرحبا"
 */
export const pickLang = (obj: any, lang: Lang = "en"): any => {
  if (typeof obj !== "object" || obj === null) return obj;

  const result: any = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (lang === "ar" && key.endsWith("_ar")) {
      const originalKey = key.replace("_ar", "");
      result[originalKey] = obj[key];
    } else if (!key.endsWith("_ar")) {
      if (typeof obj[key] === "object") {
        result[key] = pickLang(obj[key], lang);
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
};
