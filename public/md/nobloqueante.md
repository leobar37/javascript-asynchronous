<!-- .slide: class="slide_md" -->

## Operación no bloqueante

Una operación **no bloqueante** no espera a que a que se complete la operación I/o, cuando llegamos a un operación bloqueante el sistema toma esta tarea y la ejecuta en segundo plano.

> Una operación no bloqueante no frena el hilo central hasta que la
> tarea culmine, deja que el sistema operativo la complete retornando
> inmediatamente sin ningún resultado.

---

<!-- .slide: class="slide_md" -->

## ¿Como comunicamos que una tarea se a completado?

En javascript el enfoque es usar callbacks.

> Una llamada no bloqueante en javascript provee una función a la cual
> se le pasa un callback que debe ser llamado cuando la operación I/O
> se complete.

---

![image3](../assets/3.gif)

[Hof’s, clousures y callbacks para ser feliz en javascript.](https://leobar37.medium.com/hofs-clousures-y-callbacks-para-ser-feliz-en-javascript-fa105ed6ad44)

---

## Ejemplo

**Sincrono:**

```js
const fs = require("fs");
fs.writeFileSync("test.txt", "Hello World");

console.log("hola");

const result = fs.readFileSync("test.txt", "utf8");

console.log(`Result: ${result}`);
// output:
// hola
// Result: Hello World
```

---

<!-- .slide: class="slide_md" -->

**Asincrono**

```js [1| 3 | 3-7 | 9 | 11 | 11 - 17 | 19 | 20 -24 ]
const fs = require("fs");

fs.writeFile("test.txt", "Hello World", (err) => {
  if (!err) {
    console.log("File created");
  }
});

console.log("hola 1");

const result = fs.readFile("test.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

console.log(`Result: ${result}`);
// output:
// hola 1
// Result: undefined
// File created
// Hello World
```
