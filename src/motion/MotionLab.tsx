"use client";

import { useRef, useState } from "react";
import type { Panel } from "./content";
import { navPanels } from "./content";
import { usePaperTransition } from "./usePaperTransition";
import WorkPanel from "./WorkPanel";
import AboutPanel from "./AboutPanel";
import { ContactPanel, LabPanel } from "./TextPanels";

export default function MotionLab() {
  const [panel, setPanel] = useState<Panel>("home");
  const paperRef = useRef<HTMLElement>(null);
  const transitionTo = usePaperTransition({ paperRef, setPanel });
  const choose = (next: Panel) => void transitionTo(next, panel);

  return (
    <main className={`motion-stage ${panel !== "home" ? "is-open" : ""}`}>
      <article ref={paperRef} className="motion-paper" data-panel={panel}>
        <header className="motion-header">
          <div className="micro-row"><span>@yang.qing</span><span>YQ</span></div>
          <button className="motion-name" data-brand onClick={() => choose("home")} aria-label="返回首页">
            <span>YANG</span><span>QING</span>
          </button>
          <nav aria-label="Portfolio navigation">
            {navPanels.map((item) => (
              <button
                key={item}
                className={panel === item ? "active" : ""}
                onClick={() => choose(item)}
                aria-pressed={panel === item}
              >
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
            {panel !== "home" ? <button className="close" onClick={() => choose("home")}>Close</button> : null}
          </nav>
        </header>

        {panel !== "home" ? (
          <section className="motion-body" aria-live="polite">
            {panel === "work" ? <WorkPanel /> : null}
            {panel === "about" ? <AboutPanel /> : null}
            {panel === "lab" ? <LabPanel /> : null}
            {panel === "contact" ? <ContactPanel /> : null}
          </section>
        ) : null}
      </article>
    </main>
  );
}

