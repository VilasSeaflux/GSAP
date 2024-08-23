gsap.from("#page1 #box", {
  scale: 0.4,
  duration: 2,
  rotation: 360,
});

// gsap.from("#page2 h1", {
//   opacity: 0,
//   y: -100,
//   duration: 3,
//   scrollTrigger: {
//     trigger: "#page2 h1",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 10%",
//     //scrub value 0 - 5, 5 means smoothest
//     scrub: 2,
//   },
// });
// gsap.from("#page2 h2", {
//   opacity: 0,
//   duration: 3,
//   scrollTrigger: {
//     trigger: "#page2 h2",
//     scroller: "body",
//     markers: true,
//     start: "top 70%",
//     end: "top 10%",
//     scrub: 2,
//     pin: true,
//   },
// });
gsap.to("#page2 h1", {
  transform: "translate(-100%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top -0%",
    end: "top -300%",
    scrub: 1,
    pin: true,
  },
});

gsap.from("#page3 #box", {
  scale: 0,
  duration: 2,
  rotation: 360,
});
