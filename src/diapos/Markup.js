export class Markup {
  element;
  slides = [];

  run(element) {
    this.element = element;
    const elements = this.loadElements();
    elements.forEach((slide) => {
      element?.appendChild(slide);
    });

    // setup
    this.slides.forEach((el, i) => {
      el.setup(elements[i]);
    });
    return element;
  }

  async load(name) {
    const text = await fetch(`html/${name}.html`).then((d) => d.text());
    return text;
  }

  loadElements() {
    const content = this.slides.map((content) => {
      const section = document.createElement("section");
      const resultRender = content.render();
      const isString = typeof resultRender === "string";
      if (isString) {
        section.innerHTML = resultRender;
      } else {
        section.appendChild(resultRender);
      }
      return section;
    });
    return content;
  }
  addSlide(component) {
    this.slides.push(component);
  }
}
