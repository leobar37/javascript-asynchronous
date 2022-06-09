## Analogía

---

<!-- .slide: class="slide_md" -->

- **Cliente:** Pedir y recibir su orden.

- **Mesero:** Atender el pedido del cliente y entregarselo.

- **Cocinero:** Preparar las hamburguesas.

<!-- .element: class="animate" -->

---

<!-- .slide: class="slide_md" -->

### Solución bloqueante

- El cliente pide su orden.
- El mesero toma el pedido.
- Lleva el pedido hacia el cocinero.
- Espera a que termine de hacer el pedido.
- Y vuelve con la orden hacia el cliente.

<!-- .element: class="animate" -->

---

<!-- .slide: class="slide_md" -->

## Solución no bloqueante

- El cliente pide su orden.
- El mesero toma el pedido.
- Lleva el pedido hacia el cocinero.
- Deja el pedido "pendiente a entregar".
- Vuelve a seguir atendiendo a los demás clientes.
- Toma otro pedido, vuelve hacia el cocinero.
- Hasta esto el cocinero ya termino de hacer el pedido del anterior cliente.
- El mesero se vuelve con el pedido del anterior cliente y se lo entrega.

<!-- .element: class="animate" -->
