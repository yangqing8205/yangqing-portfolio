import BingeLingoCaseStudy from "./BingeLingoCaseStudy";
import Home from "./Home";
import MotionLab from "./motion/MotionLab";

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/work/bingelingo") return <BingeLingoCaseStudy />;
  if (path === "/motion-lab") return <MotionLab />;
  return <Home />;
}
