var btn = document.querySelector("#nav i");
var close = document.querySelector("#full i");

var timeline = gsap.timeline({ paused: true });
timeline.to("#full", {
  right: 0,
  duration: 0.6,
});

timeline.from("#full h4", {
  x: 150,
  duration: 0.4,
  stagger: 0.2,
  opacity: 0,
});

timeline.from("#full i", {
  opacity: 0,
});

btn.addEventListener("click", function () {
  timeline.play();
});

close.addEventListener("click", function () {
  timeline.reverse();
});
