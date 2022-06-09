import "./scss/main.scss";

export class App {
  element;

  constructor(container) {
    this.element = container;
  }
  start() {}
}

window.onload = () => {
  const app = new App(document.getElementById("app"));
  app.start();
};
