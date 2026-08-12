export type Panel = "home" | "work" | "about" | "lab" | "contact";

export const projects = [
  { no: "01", title: "BINGELINGO", subtitle: "从追剧截图到主动表达的 AI 学习闭环", style: "binge", status: "LIVE" },
  { no: "02", title: "ESSAYFLOW", subtitle: "高中英语读后续写评分与分析体验", style: "essay", status: "LIVE" },
] as const;

export const bingeScreens = [
  { src: "/projects/bingelingo-revision.png", label: "01 / TRANSFER TEST", caption: "在新语境中检验表达迁移" },
  { src: "/projects/bingelingo-evidence.png", label: "02 / ORIGINAL EVIDENCE", caption: "从字幕截图中保留语境与原始证据" },
  { src: "/projects/bingelingo-scene-talk.png", label: "03 / SCENE TALK", caption: "与剧中角色进行情境对话练习" },
  { src: "/projects/bingelingo-practice.png", label: "04 / PRACTICE TO GO", caption: "生成角色 Prompt，带走继续练习" },
] as const;

export const navPanels: Exclude<Panel, "home">[] = ["work", "about", "lab", "contact"];
