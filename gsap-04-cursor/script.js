var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var paraDiv = document.querySelector("#para-div");

main.addEventListener("mousemove", function (e) {
  gsap.to("#cursor", {
    x: e.x,
    y: e.y,
    ease: "back.out(1, 1.8)",
  });
});

paraDiv.addEventListener("mousemove", function (e) {
  gsap.to("#cursor", {
    x: e.x,
    y: e.y,
    scale: 3,
    ease: "back.out(1, 1.8)",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    color: "blue",
  });
});

paraDiv.addEventListener("mouseleave", function (e) {
  gsap.to("#cursor", {
    x: e.x,
    y: e.y,
    ease: "back.out(1, 1.8)",
    backgroundColor: "white",
    scale: 1,
  });
});
