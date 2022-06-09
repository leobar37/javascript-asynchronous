## Event Loop

---

JavaScript es de un solo hilo, entonces la única manera de manejar
operaciones asíncronas en una manera no bloqueante, es teniendo un nivel de concurrencia incorporado

---

<!-- .slide: class="slide_md" -->

## Call Stack

Mantiene el seguimiento de la función actualmente ejecutandose.

> Un Stack es una estructura de datos en especifico una pila, la cual esta bajo el principio LIFO(Last In, First Out)

<!-- .element: class="fragment" -->

---

<!-- .slide: class="slide_md" -->

## Web Api

Una **web API**, no es parte del core de javascript, pero provee métodos que
pueden ser usados por javascript, como `setTimeout`.

---

<!-- .slide: class="slide_md" -->

## The message queue

Es una cola esperando a ser ejecutada por sus funciones asociadas.
Un nuevo mensaje es agregado a la lista. Cada vez que un evento
ha sido visto por un oyente de eventos.

---

<!-- .slide: class="slide_md" -->

## Event loop

El bucle de eventos es un proceso que se mantiene corriendo.

- Revisa si el call stack está vacio.
- Si está vacio. revisa la lista de mensajes.
- Si encuenta un mensaje, lo empuja hacia el call stack para ser ejecutado.

<!-- .element: class="animate" -->

---

<!-- .slide: class="slide_md" -->

## Ejemplo

```js
function foo() {
  console.log("One");
  setTimeout(() => {
    console.log("Two");
  }, 0);
  console.log("Three");
}
foo();
```
