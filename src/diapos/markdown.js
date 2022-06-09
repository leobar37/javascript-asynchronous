export class Markdown {
  element;
  slides = [];

  run(element) {
    console.log(element);
    this.element = element;
    const slides = this.setup();
    console.log(slides.length);
    slides.forEach((slide) => {
      element?.appendChild(slide);
    });
    return element;
  }

  async load(name) {
    const text = await fetch(`md/${name}.md`).then((d) => d.text());
    return text;
  }
  setup() {
    const content = this.slides.map((content) => {
      const raw = `
        ${content}
        `;
      const el = document.createElement("section");
      const area = document.createElement("script");
      area.setAttribute("type", "text/template");
      area.textContent = raw;
      el.setAttribute("data-markdown", "");
      el.appendChild(area);
      return el;
    });

    return content;
  }
  addSlide(content) {
    this.slides.push(content);
  }
}
