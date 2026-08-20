"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { bingeScreens, projects } from "./content";
import { wrapEvidenceIndex } from "./motion-utils.mjs";

function Arrow({ direction }: { direction: "left" | "right" }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={direction === "left" ? "M15 4 7 12l8 8" : "m9 4 8 8-8 8"}/></svg>;
}

export default function WorkPanel() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [slide, setSlide] = useState(0);
  const mediaRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const project = projects[projectIndex];

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const context = gsap.context(() => {
      gsap.fromTo("[data-archive-reveal]", { yPercent: 105 }, {
        yPercent: 0,
        duration: 0.48,
        stagger: 0.07,
        ease: "power3.out",
        clearProps: "transform",
      });
    }, rootRef);
    return () => {
      context.revert();
    };
  }, []);

  const selectProject = (next: number) => {
    if (next === projectIndex) return;
    const media = mediaRef.current;
    if (!media) {
      setProjectIndex(next);
      return;
    }
    gsap.to(media, {
      y: -26,
      autoAlpha: 0,
      rotation: 0.8,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setProjectIndex(next);
        requestAnimationFrame(() => {
          gsap.fromTo(media, { y: 26, autoAlpha: 0, rotation: -1 }, {
            y: 0,
            autoAlpha: 1,
            rotation: 0,
            duration: 0.36,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          });
        });
      },
    });
  };

  const moveSlide = (amount: number) => {
    const current = stackRef.current?.querySelector<HTMLElement>(".evidence-sheet.is-current");
    if (!current) return;
    gsap.to(current, {
      y: -34,
      x: amount > 0 ? 18 : -18,
      rotation: amount > 0 ? 2.2 : -2.2,
      autoAlpha: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setSlide((value) => wrapEvidenceIndex(value + amount, bingeScreens.length));
        requestAnimationFrame(() => {
          const next = stackRef.current?.querySelector<HTMLElement>(".evidence-sheet.is-current");
          if (next) {
            gsap.fromTo(next, { y: 14, scale: 0.985, rotation: -0.7 }, {
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 0.34,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            });
          }
        });
      },
    });
  };

  return (
    <div ref={rootRef} className="motion-panel work-panel">
      <div className="content-intro" data-reveal>
        <div className="work-heading"><h1>WORK</h1><span>SELECTED / 02</span></div>
      </div>

      <div className="archive-shell" data-reveal>
        <div className="archive-title-strip"><span>PROJECT ARCHIVE</span><span>YQ / 2026</span></div>
        <div className="archive-drawer">
          <div className="work-index" data-archive-reveal>
            {projects.map((item, index) => (
              <button
                key={item.no}
                className={projectIndex === index ? "active" : ""}
                onMouseEnter={() => selectProject(index)}
                onFocus={() => selectProject(index)}
                onClick={() => selectProject(index)}
                aria-pressed={projectIndex === index}
              >
                <span>{item.no}</span><strong>{item.title}</strong><em>{item.status}</em><i aria-hidden="true" />
              </button>
            ))}
          </div>

          <div ref={mediaRef} className="project-media" data-archive-reveal>
            {project.style === "binge" ? (
              <div className="evidence-block">
                <div className="evidence-stack" ref={stackRef}>
                  {bingeScreens.map((screen, index) => {
                    const position = wrapEvidenceIndex(index - slide, bingeScreens.length);
                    return (
                      <figure
                        className={`evidence-sheet evidence-position-${position} ${position === 0 ? "is-current" : ""}`}
                        key={screen.src}
                        aria-hidden={position !== 0}
                      >
                        <img src={screen.src} alt={`BingeLingo 产品界面：${screen.caption}`} loading={index === 0 ? "eager" : "lazy"} />
                        <figcaption><span>{screen.label}</span><span>{slide + 1} / {bingeScreens.length}</span></figcaption>
                      </figure>
                    );
                  })}
                  <button className="project-arrow previous" onClick={() => moveSlide(-1)} aria-label="上一张产品截图"><Arrow direction="left" /></button>
                  <button className="project-arrow next" onClick={() => moveSlide(1)} aria-label="下一张产品截图"><Arrow direction="right" /></button>
                </div>
                <p className="screen-caption">{bingeScreens[slide].caption}</p>
              </div>
            ) : (
              <a
                className="essayflow-showcase"
                href="https://essayflow-delta.vercel.app/"
                target="_blank"
                rel="noreferrer"
                aria-label="打开 EssayFlow 在线体验"
              >
                <img src="/projects/essayflow-product.png" alt="EssayFlow 读后续写评分与分析产品界面" />
                <span className="essayflow-showcase-label"><b>LIVE PRODUCT</b><b>OPEN EXPERIENCE ↗</b></span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-copy" data-reveal>
        <div className="project-title"><strong>{project.title}</strong><span>{projectIndex + 1} / {projects.length}</span></div>
        <p className="project-subtitle">{project.subtitle}</p>
        <div className="project-detail">
          <p>{project.style === "binge" ? "针对看剧查词打断观影、收藏后难以转化为主动表达的问题，独立设计并上线从快捷截图、AI 表达提取、Notion 归档，到递进复习和角色对话的完整学习产品。" : "针对通用 AI 批改偏重语法、难以判断情节和主题的问题，设计高中英语读后续写评测产品，并将复杂评分任务拆分为结构化工作流。"}</p>
          <div className="project-facts"><span><b>ROLE</b>独立产品设计与开发</span><span><b>STATUS</b>已部署上线</span></div>
        </div>
        {project.style === "binge" && (
          <a className="project-repo-link" href="https://github.com/yangqing8205/binge-lingo" target="_blank" rel="noreferrer">
            VIEW BINGELINGO REPOSITORY ↗
          </a>
        )}
        {project.style === "essay" && (
          <a className="project-repo-link" href="https://essayflow-delta.vercel.app/" target="_blank" rel="noreferrer">
            VIEW ESSAYFLOW EXPERIENCE ↗
          </a>
        )}
      </div>
      <footer className="motion-footer" data-reveal><span>YQ©26</span><span>→ NEXT PROJECT</span></footer>
    </div>
  );
}
