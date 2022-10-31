const leftSection = document.querySelector(".section-today");
const rightSection = document.querySelector(".section-tomorrow");
const todayButton = document.querySelector(".nav__today");
const tomorrowButton = document.querySelector(".nav__tomorrow");
const togetherButton = document.querySelector(".nav__together");
const todayList = document.querySelector(".section-today__list");
const todayInput = document.querySelector(".section-today__input");
const todayInputButton = document.querySelector(".section-today__button");
const tomorrowList = document.querySelector(".section-tomorrow__list");
const tomorrowInput = document.querySelector(".section-tomorrow__input");
const tomorrowInputButtton = document.querySelector(
  ".section-tomorrow__button"
);

const onMoveSection = (e) => {
  switch (e.target.className) {
    case "nav__today":
      rightSection.classList.add("hidden");
      rightSection.classList.remove("open");
      leftSection.classList.add("open");
      leftSection.classList.remove("hidden");
      break;
    case "nav__tomorrow":
      leftSection.classList.add("hidden");
      leftSection.classList.remove("open");
      rightSection.classList.add("open");
      rightSection.classList.remove("hidden");
      break;
    case "nav__together":
      leftSection.classList.remove("hidden");
      leftSection.classList.remove("open");
      rightSection.classList.remove("hidden");
      rightSection.classList.remove("open");
    default:
      break;
  }
};

const onDelete = (e) => {
  if (e.target.parentElement.className === "section-today__item") {
    todayList.removeChild(e.target.parentElement);
  } else {
    tomorrowList.removeChild(e.target.parentElement);
  }
};

const onMakeElement = () => {
  const li = document.createElement("li");
  const text = document.createElement("span");
  const remove = document.createElement("button");
  remove.innerHTML = "delete";
  remove.classList.add("material-symbols-outlined");

  li.appendChild(text);
  li.appendChild(remove);

  return { li, text, remove };
};

const onCreateToday = () => {
  const { li, text, remove } = onMakeElement();

  if (todayInput.value === "") {
    alert("내용을 입력해주세요");
    return;
  }

  li.classList.add(`section-today__item`);
  text.innerHTML = todayInput.value;
  todayList.appendChild(li);
  todayInput.value = "";

  remove.addEventListener("click", onDelete);
};

const onCreateTomorrow = () => {
  const { li, text, remove } = onMakeElement();

  if (tomorrowInput.value === "") {
    alert("내용을 입력해주세요");
    return;
  }

  li.classList.add("section-tomorrow__item");
  text.innerHTML = tomorrowInput.value;
  tomorrowList.appendChild(li);

  tomorrowInput.value = "";

  remove.addEventListener("click", onDelete);
};

todayInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") onCreateToday();
});
tomorrowInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") onCreateTomorrow();
});

todayButton.addEventListener("click", onMoveSection);
tomorrowButton.addEventListener("click", onMoveSection);
togetherButton.addEventListener("click", onMoveSection);
todayInputButton.addEventListener("click", onCreateToday);
tomorrowInputButtton.addEventListener("click", onCreateTomorrow);
