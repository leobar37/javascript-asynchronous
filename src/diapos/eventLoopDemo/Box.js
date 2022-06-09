import { domUtils } from "./utils";
export class Box {
  header;
  boxContent;
  props = {};
  lines = [];
  isQueue = false;
  constructor(name, { lineColor = COLORS.ONE }) {
    this.props.name = name;
    Object.assign(this.props, { lineColor });
  }
  removeLine(id) {
    this.lines = this.lines.filter((line) => line.id !== id);
    this.clearLines();
    this.buildLines();
  }

  clearLines() {
    this.boxContent.innerHTML = "";
  }

  buildLine(id, text) {
    const boxLine = domUtils.create("div", { class: "box__line" });
    const span = domUtils.create("span", {});
    span.textContent = text;
    boxLine.appendChild(span);
    boxLine.style.backgroundColor = this.props.lineColor;
    this.boxContent.appendChild(boxLine);
    return boxLine;
  }

  buildLines() {
    let lines = Object.assign([], this.lines);
    if (!this.isQueue) {
      lines = lines.reverse();
    }
    lines.forEach((line) => {
      this.boxContent.appendChild(this.buildLine(line.id, line.text));
    });
  }

  makeLine(id, text) {
    this.clearLines();
    const line = { id, text };
    this.lines.push(line);
    this.buildLines();
  }
  render() {
    this.header = domUtils.create("div", { class: "box__header" });
    this.header.textContent = this.props.name;
    this.boxContent = domUtils.create("div", { class: "box__content" });
    const box = domUtils.create("div", { class: "box" }, [
      this.header,
      this.boxContent,
    ]);

    return box;
  }
}
