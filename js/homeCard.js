const cardTitle = document.querySelectorAll(".cardTitle");

function removeActiveCardTitle() {
	document.querySelector(".titleActive").classList.remove("titleActive");
}

function disappearTexts() {
	const active = document.querySelector(".cardShowText");
	const inactive = document.querySelector(".cardDisappearText");
	active.classList.remove("cardShowText");
	active.classList.add("cardDisappearText");
	inactive.classList.remove("cardDisappearText");
	inactive.classList.add("cardShowText");
	inactive.style.animation = "fade-in 1s";
}

cardTitle.forEach((elem) => {
	elem.addEventListener("click", (e) => {
		e.stopPropagation();
		removeActiveCardTitle();
		e.target.classList.add("titleActive");
		disappearTexts();
	});
});
