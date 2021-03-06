const listBox = document.querySelectorAll(".box2");
function disapear() {
	listBox.forEach((elem) => {
		elem.style.display = "none";
	});
}
function removeActive() {
	const element = document.querySelector(".active");
	element?.classList.remove("active");
}
document.addEventListener("click", (event) => {
	disapear();
});
document.addEventListener("mouseover", (event) => {
	//console.log(event.target.parentElement);
	if (
		!event.target.classList.contains("navColor") &&
		!event.target.parentElement.classList.contains("navColor") &&
		!event.target.classList.contains("box2") &&
		!event.target.parentElement.parentElement.parentElement.classList.contains(
			"boxList"
		) &&
		!event.target.parentElement.classList.contains("boxList") &&
		!event.target.parentElement.parentElement.classList.contains("boxList")
	) {
		disapear();
		removeActive();
	}
});
const whatIsHolo = document.getElementById("whatIsHolo");
whatIsHolo.addEventListener("click", (event) => {
	event.preventDefault();
	event.stopPropagation();
	const box = document.getElementById("whatIsBox");
	removeActive();
	disapear();
	event.target.classList.add("active");
	box.style.display = "block";
	box.style.animation = "grow 0.4s reverse";
});
whatIsHolo.addEventListener("mouseover", (event) => {
	event.preventDefault();
	event.stopPropagation();
	const box = document.getElementById("whatIsBox");
	removeActive();
	disapear();
	event.target.classList.add("active");

	box.style.display = "block";
	box.style.animation = "grow 0.4s reverse";
});
const solutions = document.getElementById("solutions");
solutions.addEventListener("click", (event) => {
	event.preventDefault();
	event.stopPropagation();
	const box = document.getElementById("solutionsBox");
	removeActive();
	disapear();
	event.target.classList.add("active");
	box.style.display = "block";
	box.style.animation = "grow 0.4s reverse";
});
solutions.addEventListener("mouseover", (event) => {
	event.preventDefault();
	event.stopPropagation();
	const box = document.getElementById("solutionsBox");
	removeActive();
	disapear();
	event.target.classList.add("active");
	box.style.display = "block";
	box.style.animation = "grow 0.4s reverse";
});
const community = document.getElementById("community");
community.addEventListener("mouseover", (event) => {
	event.preventDefault();
	event.stopPropagation();
	const box = document.getElementById("communityBox");
	removeActive();
	disapear();
	event.target.classList.add("active");
	box.style.display = "block";
	box.style.animation = "grow 0.4s reverse";
});
const about = document.getElementById("about");
about.addEventListener("mouseover", (event) => {
	event.preventDefault();
	event.stopPropagation();
	const box = document.getElementById("aboutBox");
	removeActive();
	disapear();
	event.target.classList.add("active");
	box.style.display = "block";
	box.style.animation = "grow 0.4s reverse";
});
