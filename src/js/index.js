document.addEventListener("DOMContentLoaded", () => {
	const dropdown = document.getElementById("dropdown");
	const selected = document.getElementById("dropdownSelected");
	const items = document.querySelectorAll(".dropdown__item");

	selected.addEventListener("click", () => {
		dropdown.classList.toggle("open");
	});

	items.forEach((item) => {
		item.addEventListener("click", () => {
			selected.childNodes[0].nodeValue = item.textContent;
			dropdown.classList.remove("open");
		});
	});

	document.addEventListener("click", (e) => {
		if (!dropdown.contains(e.target)) {
			dropdown.classList.remove("open");
		}
	});

	const range = document.getElementById("progressRange");
	const percent = document.getElementById("progressPercent");
	const fileInput = document.getElementById("fileInput");
	const fileStatus = document.getElementById("fileStatus");

	range.addEventListener("input", () => {
		percent.textContent = `${range.value}%`;
	});

	fileInput.addEventListener("change", () => {
		if (fileInput.files.length > 0) {
			fileStatus.textContent = `Файл "${fileInput.files[0].name}" прикреплён`;
		} else {
			fileStatus.textContent = "";
		}
	});
});
