<!-- .slide: class="slide_md" -->

## Async/await

Una función con `async` permite manejar codigo asincróno
de manera que parezca sincróno.

```js
async function foo() {}
```

<!-- .element: class="fragment" -->

```js
// bad code
async function sum() {
  return 2 + 1;
}
```

<!-- .element: class="fragment" -->

---

<!-- .slide: class="slide_md" -->

```js
function foo() {
  messageWithDelay("hello", 1000)
    .then((res) => {
      console.log(res);
      return messageWithDelay("world", 2000);
    })
    .then((res) => {
      console.log(res);
      return messageWithDelay("!", 500);
    })
    .then((res) => {
      console.log(res);
    });
}
foo();
```

---

<!-- .slide: class="slide_md" -->

```js [1,8|2-3|4-5|6-7]
async function foo() {
  const one = await messageWithDelay("hello", 1000);
  console.log(one);
  const two = await messageWithDelay("world", 2000);
  console.log(two);
  const three = await messageWithDelay("!", 500);
  console.log(three);
}

foo();
```

---

<!-- .slide: class="slide_md" -->

## ¿Y si algo falla?

```js [1-7|8|1-11]
async function foo() {
  const one = await messageWithDelay("hello", 1000);
  console.log(one);
  const two = await messageWithDelay("world", 2000);
  console.log(two);
  const three = await messageWithDelay("!", 500);
  console.log(three);
  await fetchUsers(true);
}

foo();
```

---

<!-- .slide: class="slide_md" -->

```js [1-7|8-9|1-11]
async function foo() {
  const one = await messageWithDelay("hello", 1000);
  console.log(one);
  const two = await messageWithDelay("world", 2000);
  console.log(two);
  const three = await messageWithDelay("!", 500);
  console.log(three);
  await fetchUsers(true).catch((err) => {
    console.log(err);
  });
}

foo();
```

---

<!-- .slide: class="slide_md" -->

```js [1,13,3-9|2,10-11|1-13]
async function foo() {
  try {
    const one = await messageWithDelay("hello", 1000);
    console.log(one);
    const two = await messageWithDelay("world", 2000);
    console.log(two);
    const three = await messageWithDelay("!", 500);
    console.log(three);
    await fetchUsers(true);
  } catch (error) {
    console.log(error);
  }
}
```
