gsap.to("#box", {
  x: 1000,
  duration: 2,
  delay: 1,
  backgroundColor: "green",
});

gsap.to("#box2", {
  x: 1000,
  duration: 2,
  delay: 2,
  backgroundColor: "red",
});

gsap.from("#box3", {
  x: 1000,
  duration: 2,
  delay: 1,
  backgroundColor: "pink",
});

gsap.from("#box4", {
  x: 1000,
  duration: 2,
  delay: 2,
  backgroundColor: "blue",
});

gsap.to("#box5", {
  x: 1000,
  duration: 2,
  delay: 1,
  stagger: 0.6,
  repeat: -1,
  yoyo: true,
});

var timeline = gsap.timeline();
timeline.to("#box6", {
  x: 1000,
  duration: 2,
});
timeline.to("#box7", {
  x: 1000,
  duration: 2,
});
timeline.to("#box8", {
  x: 1000,
  duration: 2,
});
