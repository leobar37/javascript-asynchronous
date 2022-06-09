import { reintentSelectorAll } from "../utils";
export class Loader {
  element;
  constructor(element) {
    this.element = element;
  }
  proccess(arr) {
    arr.reduce((acc, curr) => {
      acc = curr.run(acc);
      return acc;
    }, this.element);
  }
  postProcess() {
    this.addAnimateList();
  }

  async addAnimateList() {
    const animateList = await reintentSelectorAll("ul.animate");
    (animateList ?? [])?.forEach((el) => {
      const items = el.querySelectorAll("li");
      items.forEach((item) => {
        item.classList.add("fragment");
      });
    });
  }
}
