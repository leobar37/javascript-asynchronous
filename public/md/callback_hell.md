```js [1-2,10-11|3|4,9|5|6,8|7|1-11]
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
function foo() {
  setTimeout(() => {
    console.log("hello");
    setTimeout(() => {
      console.log("world");
      setTimeout(() => {
        console.log("!");
        setTimeout(() => {
          console.log("1");
          setTimeout(() => {
            console.log("2");
            setTimeout(() => {
              console.log("3");
            }, 100);
          }, 100);
        }, 100);
      }, 500);
    }, 2000);
  }, 1000);
}
```

---

<!-- .slide: class="slide_md" -->

![image](assets/cat-launch.gif)
