import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import "../scss/main.scss";
import { Loader } from "./bootstrap";
import diaposFn from "./diapos";

async function main() {
  const loader = new Loader(document.querySelector(".slides"));

  const deck = new Reveal({
    plugins: [Markdown, RevealHighlight],
  });
  const diapos = await diaposFn();
  loader.proccess([...diapos]);
  deck.initialize();
  loader.postProcess();
}

window.onload = () => {
  main();
};
