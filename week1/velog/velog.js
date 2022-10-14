const dropdownButton = document.querySelector(".nav--dropdown");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownText = document.querySelector(".dropdown__text");
const dropdownItem = document.querySelectorAll(".dropdown__item");

const onDropdown = (e) => {
  dropdownText.innerHTML = e.target.innerHTML;
  e.target.classList.add("dropdown__item--check");

  for (let i = 0; i < dropdownItem.length; i++) {
    if (dropdownItem[i].innerHTML !== e.target.innerHTML) {
      dropdownItem[i].classList.remove("dropdown__item--check");
    }
  }
};

const onToggle = () => {
  dropdownList.classList.toggle("dropdown__list--hidden");
};

for (let i = 0; i < dropdownItem.length; i++) {
  dropdownItem[i].addEventListener("click", onDropdown);
}

dropdownButton.addEventListener("click", onToggle);
