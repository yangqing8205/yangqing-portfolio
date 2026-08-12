export function LabPanel() {
  return <div className="motion-panel prose-panel text-panel">
    <div className="content-intro" data-reveal><h1>Lab</h1></div>
    <p data-reveal>Loose experiments, half-working tools and ideas that may become something later.</p>
    <ul className="lab-list" data-reveal><li>Rain Radio <span>PLAYING</span></li><li>Fading Notes <span>PROTOTYPE</span></li><li>Mood Weather <span>FAILED</span></li></ul>
    <footer className="motion-footer" data-reveal><span>YQ©26</span><span>03 / ∞</span></footer>
  </div>;
}

export function ContactPanel() {
  return <div className="motion-panel prose-panel text-panel contact-panel">
    <div className="content-intro" data-reveal><h1>Contact</h1></div>
    <p data-reveal>Have a project, a role, or just a strange idea?</p>
    <a data-reveal href="mailto:yangqing8205@163.com">yangqing8205@163.com ↗</a>
    <a data-reveal href="mailto:yangqing8205@gmail.com">yangqing8205@gmail.com ↗</a>
    <a data-reveal href="https://github.com/yangqing8205" target="_blank" rel="noreferrer">GitHub / yangqing8205 ↗</a>
    <footer className="motion-footer" data-reveal><span>YQ©26</span><span>NANJING / CHINA</span></footer>
  </div>;
}
