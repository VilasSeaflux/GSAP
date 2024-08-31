function breakText() {
	const text = document.querySelector("h1");
	const h1Text = text.textContent;

	const splitText = h1Text.split("");

	let clutter = "";
	const half = Math.floor(splitText.length / 2);

	splitText.forEach((elem, index) => {
		clutter += `<span class="b">${elem}</span>`;
	});

	text.innerHTML = clutter;
}

breakText();

gsap.from("h1 span", {
	y: 50,
	opacity: 0,
	duration: 0.6,
	delay: 0.5,
	stagger: {
		each: 0.5,
		from: "start",
	},
});
// window.addEventListener("wheel", (e) => {
// 	if (e.deltaY < 0) {
// 		gsap.to(".marque", {
// 			transform: "translateX(-200%)",
// 			delay: 1,
// 			duration: 4,
// 			repeat: -1,
// 			ease: "none",
// 		});
// 		gsap.to(".marque img", {
// 			rotate: 180,
// 		});
// 	} else {
// 		gsap.to(".marque", {
// 			transform: "translateX(0%)",
// 			delay: 1,
// 			duration: 4,
// 			repeat: -1,
// 			ease: "none",
// 		});
// 		gsap.to(".marque img", {
// 			rotate: 0,
// 		});
// 	}
// });
