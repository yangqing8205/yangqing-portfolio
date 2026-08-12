"use client";

import { RefObject, useCallback, useRef } from "react";
import { gsap } from "gsap";
import type { Panel } from "./content";

type TransitionOptions = {
  paperRef: RefObject<HTMLElement | null>;
  setPanel: (panel: Panel) => void;
};

const nextPaint = () => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));

export function usePaperTransition({ paperRef, setPanel }: TransitionOptions) {
  const busyRef = useRef(false);

  const transitionTo = useCallback(async (next: Panel, current: Panel) => {
    const paper = paperRef.current;
    if (!paper || busyRef.current || next === current) return;
    busyRef.current = true;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const first = paper.getBoundingClientRect();
    const opening = current === "home";

    if (!opening) {
      const leaving = Array.from(paper.querySelectorAll<HTMLElement>("[data-reveal]"));
      if (leaving.length > 0) {
        await gsap.to(leaving, {
          autoAlpha: 0,
          y: -10,
          duration: reduceMotion ? 0.01 : 0.16,
          stagger: reduceMotion ? 0 : 0.018,
          ease: "power2.in",
        });
      }
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    setPanel(next);
    await nextPaint();

    const last = paper.getBoundingClientRect();
    const deltaX = first.left + first.width / 2 - (last.left + last.width / 2);
    const deltaY = first.top + first.height / 2 - (last.top + last.height / 2);
    const scaleX = first.width / last.width;
    const scaleY = first.height / last.height;
    const reveals = Array.from(paper.querySelectorAll<HTMLElement>("[data-reveal]"));
    const brand = paper.querySelector<HTMLElement>("[data-brand]");

    if (reveals.length > 0) gsap.set(reveals, { autoAlpha: 0, y: 18 });
    gsap.set(paper, {
      x: deltaX,
      y: deltaY,
      scaleX,
      scaleY,
      transformOrigin: "50% 50%",
    });

    const timeline = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        gsap.set(paper, { clearProps: "transform,transformOrigin,height,minHeight,boxShadow,borderRadius" });
        if (reveals.length > 0) gsap.set(reveals, { clearProps: "transform,opacity,visibility" });
        if (brand) gsap.set(brand, { clearProps: "transform,opacity,visibility" });
        busyRef.current = false;
      },
    });

    timeline
      .to(paper, {
        scaleX: scaleX * 0.98,
        scaleY: scaleY * 0.98,
        duration: reduceMotion ? 0.01 : 0.12,
      })
      .to(paper, {
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        borderRadius: opening ? 1 : 3,
        boxShadow: opening
          ? "0 1px 10px rgba(0,0,0,.10)"
          : "0 2px 3px rgba(0,0,0,.20), 0 12px 26px rgba(0,0,0,.11)",
        duration: reduceMotion ? 0.01 : 0.52,
      }, ">-0.02");

    if (brand) {
      timeline.fromTo(brand, { y: opening ? 16 : -8, autoAlpha: 0.75 }, {
        y: 0,
        autoAlpha: 1,
        duration: reduceMotion ? 0.01 : 0.34,
      }, opening ? 0.22 : 0.08);
    }

    if (reveals.length > 0) {
      timeline.to(reveals, {
        autoAlpha: 1,
        y: 0,
        duration: reduceMotion ? 0.01 : 0.32,
        stagger: reduceMotion ? 0 : 0.065,
        ease: "power3.out",
      }, opening ? 0.34 : 0.12);
    }

    timeline.to(paper, { y: opening ? -3 : 0, duration: reduceMotion ? 0.01 : 0.08, ease: "power2.out" });
    timeline.to(paper, { y: 0, duration: reduceMotion ? 0.01 : 0.1, ease: "power2.inOut" });
  }, [paperRef, setPanel]);

  return transitionTo;
}
