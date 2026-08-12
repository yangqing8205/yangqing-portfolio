import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("build exposes both the homepage and /motion-lab as static HTML entries", () => {
  assert.equal(existsSync(new URL("../dist/index.html", import.meta.url)), true);
  assert.equal(existsSync(new URL("../dist/motion-lab/index.html", import.meta.url)), true);
});

test("the EdgeOne version keeps Work, About, Lab, and Contact content", () => {
  const source = [
    read("src/App.tsx"),
    read("src/Home.tsx"),
    read("src/motion/content.ts"),
    read("src/motion/AboutPanel.tsx"),
    read("src/motion/TextPanels.tsx"),
  ].join("\n");
  for (const label of ["Work", "About", "Lab", "Contact", "BINGELINGO", "ESSAYFLOW", "南京航空航天大学"]) {
    assert.match(source, new RegExp(label));
  }
});

test("the production CSS does not request blocked Google Fonts", () => {
  const css = `${read("src/styles.css")}\n${read("src/motion-lab.css")}`;
  assert.doesNotMatch(css, /fonts\.googleapis\.com|fonts\.gstatic\.com/);
});

test("the site bundles its display, mono, and Chinese fonts locally", () => {
  const entry = read("src/main.tsx");
  for (const font of ["@fontsource/archivo-black", "@fontsource/ibm-plex-mono", "@fontsource/noto-sans-sc"]) {
    assert.match(entry, new RegExp(font));
  }
});

test("Home scroll effect never returns the browser scrollTo result", () => {
  const source = read("src/Home.tsx");
  assert.doesNotMatch(source, /useEffect\(\(\)\s*=>\s*window\.scrollTo/);
});

test("all maintained pages publish the approved contact and project links", () => {
  const home = read("src/Home.tsx");
  const contact = read("src/motion/TextPanels.tsx");
  const motionWork = read("src/motion/WorkPanel.tsx");
  const combined = `${home}\n${contact}\n${motionWork}`;

  for (const expected of [
    "mailto:yangqing8205@163.com",
    "mailto:yangqing8205@gmail.com",
    "https://github.com/yangqing8205",
    "https://github.com/yangqing8205/binge-lingo",
  ]) {
    assert.ok(combined.includes(expected), `missing ${expected}`);
  }

  assert.doesNotMatch(combined, /github\.com\/yangqing8205\/EssayFlow-v2/);
});

test("the maintained homepage stacks Contact links vertically", () => {
  assert.match(read("src/styles.css"), /\.contact-panel\{display:flex;flex-direction:column\}/);
});
