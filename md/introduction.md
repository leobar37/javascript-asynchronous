## ¿Javascript Asincrono🙄?

Event Loop, Callbacks, Promises and Async / Await in javascript <!-- .element: class="fragment"  -->

<!--  -->

---

```js [1-8|10|12-16|18-22|24-28|30-32|34-42|43]
const doSomething = (onComplete) => {
  console.log("start");
  setTimeout(() => {
    onComplete();
    console.log("end");
  }, 100);
  return "result";
};

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const fetchTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );
};

const prepareFoods2 = async () => {
  const promises = [sleep(1000), sleep(1000)];
  await Promise.all(promises);
  return "foods";
};

const prepareFoods = async () => {
  await sleep(1000);
  await sleep(1000);
  return "foods";
};

const calculateSome = () => {
  return 2 + 5;
};

const main = async () => {
  doSomething(() => {
    console.log("done");
  });
  await prepareFoods2();
  await prepareFoods();
  await fetchTodos();
  calculateSome();
};
main();
```

---

![image](assets/terrify.gif)
