"use client";

import { useEffect, useRef } from "react";
import { getActiveJourneyNode } from "./motion-utils.mjs";

function PlaneIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3 17.2 28.7 5.8c.9-.4 1.8.5 1.4 1.4L18.8 29l-3.5-9.1-7.8-4.4L3 17.2Zm6.2-2.4 7.7 3.2 8.6-8.5-10.3 7.1.7 8.1 2.1-6.1"/></svg>;
}

const stops = [
  { meta: "XIANGTAN", title: "湘潭大学", sub: "英语专业 · 本科", body: "从语言学习出发，逐渐开始关注学习过程本身，以及工具如何影响理解和表达。", extra: null },
  { meta: "NANJING", title: "南京航空航天大学", sub: "英语语言文学 · 硕士研究生二年级", body: "继续学习语言与文学，也开始把兴趣延伸到 AI、英语教育和产品设计。", extra: "runway" },
  { meta: "AI EDUCATION", title: "两段 AI 教育产品实习", sub: "Prompt · Agent · 产品交付", body: "参与 AI 口语、AI 写作和智能学习产品，把教学方案拆解为可以执行和测试的产品流程。", extra: "experience" },
  { meta: "BUILDING", title: "BingeLingo & EssayFlow", sub: "独立产品实践", body: "用 AI Coding 工具把学习中遇到的具体问题做成可以运行、体验和继续迭代的小产品。", extra: "projects" },
];

export default function AboutPanel() {
  const journeyRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      frameRef.current = null;
      const journey = journeyRef.current;
      if (!journey) return;
      const rect = journey.getBoundingClientRect();
      const travel = Math.max(1, rect.height - 90);
      const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.55 - rect.top) / travel));
      journey.style.setProperty("--journey-progress", String(progress));
      journey.style.setProperty("--plane-y", `${progress * travel}px`);
      const nodes = Array.from(journey.querySelectorAll<HTMLElement>(".journey-node"));
      const thresholds = nodes.map((node) => {
        const stopTop = node.parentElement instanceof HTMLElement ? node.parentElement.offsetTop : 0;
        return Math.max(0, Math.min(1, (stopTop + node.offsetTop - 18) / travel));
      });
      const active = getActiveJourneyNode(progress, thresholds);
      nodes.forEach((node, index) => node.classList.toggle("is-crossed", index <= active));
    };
    const schedule = () => {
      if (frameRef.current === null) frameRef.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="motion-panel prose-panel about-panel">
      <div className="content-intro" data-reveal><div className="about-heading"><h1>ABOUT</h1><span>关于我</span></div></div>
      <section className="about-intro" data-reveal>
        <p className="hello">你好，我是杨情。</p>
        <p>南京航空航天大学英语语言文学专业研二学生。</p>
        <p>目前正在探索 AI、英语教育与产品设计的结合，做过两段 AI 教育产品相关实习，也在尝试独立做一些自己真正想用的产品。</p>
        <div className="about-tags"><span>AI PRODUCT</span><span>ENGLISH EDUCATION</span><span>VIBE CODING</span></div>
      </section>

      <section className="journey" ref={journeyRef} aria-label="学习与产品实践经历" data-reveal>
        <div className="route-line"><i /></div>
        <div className="paper-plane"><PlaneIcon /></div>
        {stops.map((stop, index) => (
          <article className="journey-stop" key={stop.meta}>
            <i className="journey-node" aria-hidden="true" />
            <div className="stop-meta"><span>0{index + 1}</span><span>{stop.meta}</span></div>
            <h2>{stop.title}</h2><h3>{stop.sub}</h3><p>{stop.body}</p>
            {stop.extra === "runway" ? <div className="runway"><span>NUAA</span><i /></div> : null}
            {stop.extra === "experience" ? <div className="experience-pair"><span>AI 口语课程</span><span>AI 英语写作</span></div> : null}
            {stop.extra === "projects" ? <div className="mini-projects"><span><b>01</b>BingeLingo</span><span><b>02</b>EssayFlow</span></div> : null}
          </article>
        ))}
      </section>
      <section className="next-stop" data-reveal><span>NEXT DESTINATION</span><strong>AI 产品经理 / AI 产品实习生</strong></section>
      <footer className="motion-footer" data-reveal><span>YQ©26</span><span>ABOUT / 01—04</span></footer>
    </div>
  );
}
