import { createRoot } from "react-dom/client";
import Wrapper from "./components/layout/wrapper/wrapper.jsx";
import "../src/components/layout/shared/styles/index.css";
import Hero from "./components/sections/hero.jsx";

createRoot(document.getElementById("root")).render(
  <Wrapper>
    <Hero />
  </Wrapper>
);
