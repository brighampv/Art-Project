const menu = document.querySelector("header");
const h1 = document.querySelector("h1");
const scrollDown = document.querySelector(".scroll-down");

const options = {
  rootMargin: "-70px 0px 0px",
  threshold: 0,
};

const ROOT_MARGIN = 70;

let mainObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //element is not in viewport
    if (!entry.isIntersecting) {
      menu.classList.add("solid-menu");

      h1.classList.add("hidden");
      scrollDown.classList.add("hidden");

      /* element is intersecting the viewport */
    } else {
      menu.classList.remove("solid-menu");
      h1.classList.remove("hidden");
      scrollDown.classList.remove("hidden");
    }
  });
}, options);

let watcher = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // catch scroll down
    if (!entry.isIntersecting && entry.boundingClientRect.y < 0) {
      menu.classList.toggle("solid-menu");
    }
    // catch scroll up on rootMargin
    else if (
      entry.intersectionRect.height > 0 &&
      entry.intersectionRect.y < ROOT_MARGIN
    ) {
      menu.classList.toggle("solid-menu");
    }
  });
}, options);

mainObserver.observe(document.querySelector(".full-spacer"));

document.querySelectorAll(".watch").forEach((element) => {
  watcher.observe(element);
});
