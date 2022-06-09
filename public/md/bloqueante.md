<!-- .slide: class="slide_md" -->

## Operación bloqueante

Un sistema multitarea etiqueta cada proceso de acuerdo a su estado dependiendo
de que tan listos estén para ponerlos en la CPU, para que puedan ejecutarse.

### Evento I/O:

Un evento I/O indica el progreso de una operación I/O.

**Por ejemplo:**

- La escritura del archivo ha fallado.
- La escritura del archivo se ha completado.

---

<!-- .slide: class="slide_md" -->

### Ejemplo:

```js [1|3|5|7|9|10-12]
const fs = require("fs");

fs.writeFileSync("test.txt", "Hello World");

console.log("hola");

const result = fs.readFileSync("test.txt", "utf8");

console.log(`Result: ${result}`);
// output:
// hola
// Result: Hello World
```

**¿Cuando esto es un problema?**

Se vuelve un problema cuando el proceso I/O toma su tiempo, porque javascript
es un solo hilo y lo tendremos bloqueado hasta que se escriba el archivo.
