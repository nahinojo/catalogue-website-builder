import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkFrontmatter from "remark-frontmatter";
import rehypeStringify from "rehype-stringify";
import rehypeKatex from "rehype-katex";
import remarkRehype from "remark-rehype";
import remarkMath from "remark-math";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import type { Root as mdastRoot } from "mdast";

import { parse } from "@std/yaml";
import "mdast-util-to-hast";
import "hastscript";
import type { Root as hastRoot } from "hast";
import { FrontMatter, Demonstration } from "./types/index.ts";


let frontmatter: FrontMatter;
const filename = "1A20.10.md";
const demo: Demonstration = {
  filename,
  piraId: filename.replace(".md", ""),
  name: "Gaussian Collision Board",
  category: filename.slice(0, 2),
  subcategory: filename.slice(2, 4),
  topic: filename.slice(5, 7),
  images: [],
  concept: [],
  equipment: [],
  procedure: [],
};



const convertMarkdownToHtml = async () => {
  const demoFileProcessed = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkStringify)
    .use(remarkFrontmatter, ["yaml"])
    .use(extractFrontmatter)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(viewTree)
    .use(rehypeStringify)
    .process(await demo.filename);
  const html = fromTemplateHTML(demoFileProcessed.toString());
  Deno.writeTextFile(`${Deno.cwd()}/dist/${demo.piraId}.html`, html);
};

// convertMarkdownToHtml();

function extractFrontmatter() {
  return function (tree: mdastRoot) {
    visit(tree, (node) => {
      if (node.type === "yaml") {
        frontmatter = parse(node.value) as FrontMatter || {};
        demo.piraId = frontmatter?.piraId
          ? frontmatter.piraId
          : filename.replace(".md", "");
        demo.name = frontmatter?.name
          ? frontmatter.name
          : filename.replace(".md", "");
        demo.category = frontmatter?.category
          ? frontmatter.category
          : filename.slice(0, 2);
        demo.subcategory = frontmatter?.subcategory
          ? frontmatter.subcategory
          : filename.slice(2, 4);
        demo.topic = frontmatter?.topic
          ? frontmatter.topic
          : filename.slice(5, 7);
        demo.images = frontmatter?.images
        ? frontmatter.images
        : [];
      }
    });
  };
}

function viewTree() {
  return function (tree: hastRoot) {
    console.log(tree);
  };
}

const fromTemplateHTML = (content: string, piraId?: string) => {
  // const categoryCode = piraId?.slice(0, 2)
  // const subcategoryCode = piraId?.slice(2, 4)
  // const topicCode = piraId?.slice(5, 7)
  content;

  // Get corresponding value from pira-index.json

  const katexFolderPath = `assets/katex`;
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>
          ${piraId} - ${frontmatter.name}
      </title>
      <link rel="stylesheet" href="${katexFolderPath}/katex.min.css">
      <script defer src="${katexFolderPath}/katex.min.js"></script>
      <script defer src="${katexFolderPath}/contrib/auto-render.min.js"></script>
      <link rel="stylesheet" href="assets/demo.css">
    </head>
      <body>
        <div id="page-container">
         <header>
            <div id="title">
               <span>
                ${frontmatter.name}
               </span>
               <span>
                  ${piraId}
               </span>
            </div>
            <div id="topics">
               <span class="topic" id="topic-left">
                  ${""}
               </span>
               <span class="topic" id="topic-center">
                  ${""}
               </span>
               <span class="topic" id="topic-right">
                  ${""}
               </span>
            </div>
         </header>
      </body>
    </html>
    `;
};
