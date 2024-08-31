// function breakText() {
//   var text = document.querySelector("h1");
//   var h1Text = text.textContent;

//   var splitText = h1Text.split("");

//   var clutter = "";
//   var half = Math.floor(splitText.length / 2);

//   splitText.forEach(function (elem, index) {
//     if (index < half) {
//       clutter += `<span class="a">${elem}</span>`;
//     } else {
//       clutter += `<span class="b">${elem}</span>`;
//     }
//   });

//   text.innerHTML = clutter;
// }

// breakText();

// gsap.from("h1 .a", {
//   y: 50,
//   opacity: 0,
//   duration: 0.6,
//   delay: 0.5,
//   stagger: 0.15,
// });
// gsap.from("h1 .b", {
//   y: 50,
//   opacity: 0,
//   duration: 0.6,
//   delay: 0.5,
//   stagger: -0.15,
// });
window.addEventListener("wheel", function (e) {
  if (e.deltaY < 0) {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      delay: 1,
      duration: 4,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: 180,
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      delay: 1,
      duration: 4,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: 0,
    });
  }
});
