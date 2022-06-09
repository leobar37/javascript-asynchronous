<!-- .slide: class="slide_md" -->

## Promesas

una promesa representa la completación de una función asincrona. Esta es un objeto
que posiblemente retornara un valor en el futuro.

> Las promesas complementan el objetivo básico de un **callback**
> pero con caracteristicas adicionales y una sintaxis más legible.

<!-- .element: class="fragment" -->

---

<!-- .slide: class="slide_md" -->

## Creando una promesa

```js
const promise = new Promise((resolve, reject) => {});
```

```js
const promise = new Promise((resolve, reject) => {
  resolve("Hi mom");
});
```

<!-- .element: class="fragment" -->

Una promesa tiene 3 posibles estados:

<!-- .element: class="fragment" -->

- **Pending:** Valor inicial
- **Fullfilled:** La promesa a sido resuelta.
- **Rejected:** La promesa a fallado.

<!-- .element: class="animate" -->

---

## Consumir una promesa

```js
promise.then((response) => {
  console.log(response);
});
```

**Output**

```js
Hi mon
```

---

```js
function foo() {
  setTimeout(() => {
    console.log("hello");
    setTimeout(() => {
      console.log("world");
      setTimeout(() => {
        console.log("!");
      }, 500);
    }, 2000);
  }, 1000);
}
```

---

<!-- .slide: class="slide_md" -->

```js
const messageWithDelay = (msg, ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, ms);
  });
```

```js [1,14,15|2|3-4|5-6|7-8|9-10|11-13|1-15]
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

<!-- .element: class="fragment" -->

---

<!-- .slide: class="slide_md" -->

## ¿Y si algo falla?

```js
const fetchUsers = (forceError = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (forceError) {
        reject("Something went wrong");
      } else {
        resolve(["user1", "user2"]);
      }
    }, 1000);
  });
```

<!-- .element: class="fragment" -->

---

<!-- .slide: class="slide_md" -->

```js [1-12|13-14|15-18|19-21]
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
      return fetchUsers(true);
    })
    .then((res) => {
      console.log("hello");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
foo();
```

---

<!-- .slide: class="slide_md" -->

### Output

```
hello
world
!
Something went wrong
```
