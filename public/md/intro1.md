<!-- .slide: class="slide_md" -->

## Javascript Asincrono

Inicialmente, los sitios web consistían en data estática mostrada en una página HTML.

**En la actualidad** <!-- .element: class="fragment" -->

- Llamar una api. <!-- .element: class="fragment" -->
- Manejar timers. <!-- .element: class="fragment" -->
- etc. <!-- .element: class="fragment" -->

**Emplear técnicas de programación asincrona** <!-- .element: class="fragment" -->

---

## I/O operations

---

<!-- .slide: class="slide_md" -->

### ¿Qué es una operación I/O?

Es lo que una computado hace que sea una computadora.

> Las computadoras reciben una instrucción, hacen algo con esa instrucción
> y después nos dan un resultado.

**Por ejemplo:**

_Una petición hacia un server http, la request es un input y la
respuesta del handler es el output_

---

<!-- .slide: class="slide_md" -->

## ¿Cuando ocurre un proceso I/O?

Estos procesos ocurren cuando accedemos a un recurso externo.

**Por ejemplo:**

- Hacer peticiones de Red.
- Escribir o leer archivos.

> Cualquier recurso que no es accesible instantantaneamente en el nivel de instrucción
> de la máquina, osea requiere de alguna espera, es un proceso I/O
