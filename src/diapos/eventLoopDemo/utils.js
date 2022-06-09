export const domUtils = {
  create: (tag, attrs, children) => {
    const el = document.createElement(tag);
    if (attrs) {
      for (const key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }
    if (!children) {
      return el;
    }
    const isString = typeof children === "string";
    if (!isString) {
      children.forEach((child) => {
        el.appendChild(child);
      });
    }
    if (isString) {
      el.innerHTML = children;
    }
    return el;
  },
};
