"use strict"

document.addEventListener("click", documentClick);

function documentClick(e) {
	const targetItem = e.target;

	if (targetItem.closest(".menu__body")) {
		document.documentElement.classList.toggle("menu-open")
	}
} 