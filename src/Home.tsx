"use client";

import { useEffect, useRef, useState } from "react";

type Panel = "home" | "work" | "experience" | "about" | "contact";

const projects = [
  { no: "01", title: "BINGELINGO", subtitle: "从追剧截图到主动表达的 AI 学习闭环", style: "binge", status: "LIVE" },
  { no: "02", title: "ESSAYFLOW", subtitle: "高中英语读后续写评分与分析体验", style: "essay", status: "LIVE" },
];

const bingeScreens = [
  { src: "/projects/bingelingo-revision.png", label: "01 / TRANSFER TEST", caption: "在新语境中检验表达迁移" },
  { src: "/projects/bingelingo-evidence.png", label: "02 / ORIGINAL EVIDENCE", caption: "从字幕截图中保留语境与原始证据" },
  { src: "/projects/bingelingo-scene-talk.png", label: "03 / SCENE TALK", caption: "与剧中角色进行情境对话练习" },
  { src: "/projects/bingelingo-practice.png", label: "04 / PRACTICE TO GO", caption: "生成角色 Prompt，带走继续练习" },
];

export default function Home() {
  const [panel, setPanel] = useState<Panel>("home");
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [panel]);
  useEffect(() => {
    const updateHeader = () => setCompact(panel !== "home" && window.scrollY > 110);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, [panel]);

  const selectPanel = (next: Panel) => setPanel(next);

  return (
    <main className={`stage ${panel !== "home" ? "is-open" : ""}`}>
      <article className={`paper-window ${compact ? "compact" : ""}`}>
        <header className="paper-header">
          <div className="micro-row"><span>@yang.qing</span><span>YQ</span></div>
          <button className="name-lockup" onClick={() => selectPanel("home")} aria-label="返回首页">
            <span>YANG</span><span>QING</span>
          </button>
          <nav aria-label="Portfolio navigation">
            <button className="compact-brand" onClick={() => selectPanel("home")} aria-label="返回首页">YQ</button>
            {(["work", "experience", "about", "contact"] as Panel[]).map((item) => (
              <button key={item} className={panel === item ? "active" : ""} onClick={() => selectPanel(item)}>
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
            {panel !== "home" && <button className="close" onClick={() => selectPanel("home")}>Close</button>}
          </nav>
        </header>

        {panel !== "home" && (
          <section className="paper-body" aria-live="polite">
            {panel === "work" && <Work />}
            {panel === "experience" && <Experience />}
            {panel === "about" && <About />}
            {panel === "contact" && <Contact />}
          </section>
        )}
        {panel === "home" && (
          <section className="paper-body homepage-body" aria-live="polite">
            <div className="homepage-visual">
              <img src="/homepage-visual.png" alt="BingeLingo 追剧学英语" />
            </div>
          </section>
        )}
      </article>
    </main>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={direction === "left" ? "M15 4 7 12l8 8" : "m9 4 8 8-8 8"}/></svg>;
}

function Work() {
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(0);
  const project = projects[index];
  const moveSlide = (amount: number) => setSlide((slide + amount + bingeScreens.length) % bingeScreens.length);

  return <div className="panel-content work-panel">
    <div className="work-heading"><h1>WORK</h1><span>SELECTED / 02</span></div>
    <div className="work-index">
      {projects.map((item, itemIndex) => <button key={item.no} className={index === itemIndex ? "active" : ""} onMouseEnter={() => setIndex(itemIndex)} onFocus={() => setIndex(itemIndex)} onClick={() => setIndex(itemIndex)}>
        <span>{item.no}</span><strong>{item.title}</strong><em>{item.status}</em>
      </button>)}
    </div>

    {project.style === "binge" ? <div className="real-project" key="binge">
      <div className="real-media">
        <img src={bingeScreens[slide].src} alt={`BingeLingo 产品界面：${bingeScreens[slide].caption}`} loading={slide === 0 ? "eager" : "lazy"} />
        <div className="media-label"><span>{bingeScreens[slide].label}</span><span>{slide + 1} / {bingeScreens.length}</span></div>
        <button className="project-arrow previous" onClick={() => moveSlide(-1)} aria-label="上一张产品截图"><Arrow direction="left"/></button>
        <button className="project-arrow next" onClick={() => moveSlide(1)} aria-label="下一张产品截图"><Arrow direction="right"/></button>
      </div>
      <p className="screen-caption">{bingeScreens[slide].caption}</p>
    </div> : <a className="essayflow-showcase" key="essay" href="https://essayflow-delta.vercel.app/" target="_blank" rel="noreferrer" aria-label="打开 EssayFlow 在线体验">
      <img src="/projects/essayflow-product.png" alt="EssayFlow 读后续写评分与分析产品界面" />
      <span className="essayflow-showcase-label"><b>LIVE PRODUCT</b><b>OPEN EXPERIENCE ↗</b></span>
    </a>}

    <div className="project-title"><strong>{project.title}</strong><span>{index + 1} / {projects.length}</span></div>
    <p className="project-subtitle">{project.subtitle}</p>
    <div className="project-detail">
      <p>{project.style === "binge" ? "针对看剧查词打断观影、收藏后难以转化为主动表达的问题，独立设计并上线从快捷截图、AI 表达提取、Notion 归档，到递进复习和角色对话的完整学习产品。" : "针对通用 AI 批改偏重语法、难以判断情节和主题的问题，设计高中英语读后续写评测产品，并将复杂评分任务拆分为结构化工作流。"}</p>
      <div className="project-facts"><span><b>ROLE</b>独立产品设计与开发</span><span><b>STATUS</b>已部署上线</span></div>
    </div>
    {project.style === "binge" && (
      <div className="project-actions">
        <a className="project-case-link" href="/work/bingelingo">VIEW CASE STUDY →</a>
        <a className="project-repo-link" href="https://github.com/yangqing8205/binge-lingo" target="_blank" rel="noreferrer">
          GITHUB REPOSITORY ↗
        </a>
      </div>
    )}
    {project.style === "essay" && (
      <div className="project-actions">
        <a className="project-case-link" href="https://essayflow-delta.vercel.app/" target="_blank" rel="noreferrer">VIEW LIVE EXPERIENCE →</a>
        <a className="project-repo-link" href="https://github.com/yangqing8205/EssayFlow" target="_blank" rel="noreferrer">GITHUB REPOSITORY ↗</a>
      </div>
    )}
    <footer className="paper-footer"><span>YQ©26</span><span>→ NEXT PROJECT</span></footer>
  </div>;
}

function PlaneIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3 17.2 28.7 5.8c.9-.4 1.8.5 1.4 1.4L18.8 29l-3.5-9.1-7.8-4.4L3 17.2Zm6.2-2.4 7.7 3.2 8.6-8.5-10.3 7.1.7 8.1 2.1-6.1"/></svg>;
}

function Experience() {
  return <div className="panel-content experience-panel">
    <div className="about-heading"><h1>EXPERIENCE</h1><span>经历</span></div>

    <section className="exp-section">
      <article className="exp-card">
        <div className="stop-meta"><span>01</span><span>AI EDUCATION</span></div>
        <h2>两段 AI 教育产品实习</h2>
        <h3>Prompt · Agent · 产品交付</h3>
        <p>参与 AI 口语、AI 写作和智能学习产品，把教学方案拆解为可以执行和测试的产品流程。</p>
        <div className="experience-pair"><span>AI 口语课程</span><span>AI 英语写作</span></div>
      </article>

      <article className="exp-card">
        <div className="stop-meta"><span>02</span><span>BUILDING</span></div>
        <h2>BingeLingo & EssayFlow</h2>
        <h3>独立产品实践</h3>
        <p>用 AI Coding 工具把学习中遇到的具体问题做成可以运行、体验和继续迭代的小产品。</p>
        <div className="mini-projects"><span><b>01</b>BingeLingo</span><span><b>02</b>EssayFlow</span></div>
      </article>
    </section>

    <section className="next-stop"><span>NEXT DESTINATION</span><strong>AI 产品经理 / AI 产品实习生</strong></section>
    <footer className="paper-footer"><span>YQ©26</span><span>EXPERIENCE / 01—02</span></footer>
  </div>;
}

function About() {
  const routeRef = useRef<HTMLDivElement>(null);
  const [flight, setFlight] = useState(0);

  useEffect(() => {
    const updateFlight = () => {
      if (!routeRef.current) return;
      const rect = routeRef.current.getBoundingClientRect();
      const progress = (window.innerHeight * .58 - rect.top) / rect.height;
      setFlight(Math.max(0, Math.min(1, progress)));
    };
    updateFlight();
    window.addEventListener("scroll", updateFlight, { passive: true });
    window.addEventListener("resize", updateFlight);
    return () => {
      window.removeEventListener("scroll", updateFlight);
      window.removeEventListener("resize", updateFlight);
    };
  }, []);

  return <div className="panel-content about-panel">
    <div className="about-heading"><h1>ABOUT</h1><span>关于我</span></div>
    <section className="about-intro">
      <p className="hello">你好，我是杨情。</p>
      <p>南京航空航天大学英语语言文学专业研二学生。</p>
      <p>目前正在探索 AI、英语教育与产品设计的结合，做过两段 AI 教育产品相关实习，也在尝试独立做一些自己真正想用的产品。</p>
      <div className="about-tags"><span>AI PRODUCT</span><span>ENGLISH EDUCATION</span><span>VIBE CODING</span></div>
    </section>

    <section className="journey" ref={routeRef} aria-label="学习经历">
      <div className="route-line-about"><i style={{ height: `${flight * 100}%` }}/></div>
      <div className="flying-plane" style={{ top: `${flight * 100}%` }}><PlaneIcon /></div>

      <article className="journey-stop xiangtan-stop">
        <div className="stop-meta"><span>01</span><span>XIANGTAN</span></div>
        <h2>湘潭大学</h2>
        <h3>英语专业 · 本科</h3>
        <p>从语言学习出发，逐渐开始关注学习过程本身，以及工具如何影响理解和表达。</p>
      </article>

      <article className="journey-stop featured-stop nanjing-stop">
        <div className="stop-meta"><span>02</span><span>NANJING</span></div>
        <h2>南京航空航天大学</h2>
        <h3>英语语言文学 · 硕士研究生二年级</h3>
        <p>继续学习语言与文学，也开始把兴趣延伸到 AI、英语教育和产品设计。</p>
        <div className="runway"><span>NUAA</span><i /></div>
      </article>
    </section>

    <footer className="paper-footer"><span>YQ©26</span><span>ABOUT / 01—02</span></footer>
  </div>;
}

function Lab() { return <div className="panel-content text-panel"><h1>Lab</h1>
  <p>Loose experiments, half-working tools and ideas that may become something later.</p>
  <ul className="lab-list"><li>Rain Radio <span>PLAYING</span></li><li>Fading Notes <span>PROTOTYPE</span></li><li>Mood Weather <span>FAILED</span></li></ul>
  <footer className="paper-footer"><span>YQ©26</span><span>03 / ∞</span></footer>
</div>; }

function Contact() {
  return <div className="panel-content text-panel contact-panel">
    <h1>Contact</h1>
    <p>Have a project, a role, or just a strange idea?</p>
    <a href="mailto:yangqing8205@163.com">yangqing8205@163.com ↗</a>
    <a href="mailto:yangqing8205@gmail.com">yangqing8205@gmail.com ↗</a>
    <a href="https://github.com/yangqing8205" target="_blank" rel="noreferrer">GitHub / yangqing8205 ↗</a>
    <footer className="paper-footer"><span>YQ©26</span><span>NANJING / CHINA</span></footer>
  </div>;
}
