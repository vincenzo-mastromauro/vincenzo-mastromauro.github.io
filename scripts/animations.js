let elementsToWatch = document.querySelectorAll(".watch");

let callback = function (items) {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
};
let observer = new IntersectionObserver(callback, { threshold: 1 });
elementsToWatch.forEach((element) => {
  observer.observe(element);
});
