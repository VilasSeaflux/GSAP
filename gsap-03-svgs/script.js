var path = "M 10 100 Q 500 100 990 100";
var finalPath = "M 10 100 Q 500 100 990 100";

var stringElement = document.querySelector("#string");
stringElement.addEventListener("mousemove", function (dets) {
  console.log("mousemove");
  path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
  gsap.to("svg path", {
    attr: {
      d: path,
    },
    duration: 0.5,
    ease: "power3.out",
  });
});

stringElement.addEventListener("mouseleave", function (dets) {
  console.log("mouseleave");
  gsap.to("svg path", {
    attr: {
      d: finalPath,
    },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)",
  });
});
