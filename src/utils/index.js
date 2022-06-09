export const reintentSelectorAll = (selector, intents = 100) => {
  return new Promise((res, rej) => {
    let count = intents;
    const interval = setInterval(() => {
      const el = document.querySelectorAll(selector);
      if (el && el.length > 0) {
        clearInterval(interval);
        res(el);
      }
      if (count === 0) {
        res(null);
        clearInterval(interval);
      }
      count--;
    }, 100);
  });
};
