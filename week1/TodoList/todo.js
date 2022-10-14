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

const onFullToday = () => {
  rightSection.classList.add("hidden");
  leftSection.classList.remove("hidden");
};

const onFullTomorrow = () => {
  leftSection.classList.add("hidden");
  rightSection.classList.remove("hidden");
};

const onTogether = () => {
  leftSection.classList.remove("hidden");
  rightSection.classList.remove("hidden");
};

const onDeleteToday = (e) => {
  todayList.removeChild(e.target.parentElement);
};

const onDeleteTomorrow = (e) => {
  tomorrowList.removeChild(e.target.parentElement);
};

const onCreateToday = () => {
  if (todayInput.value === "") {
    alert("내용을 입력해주세요");
    return;
  }

  const todayLi = document.createElement("li");
  const todayText = document.createElement("span");
  const todayDelete = document.createElement("button");
  todayDelete.innerHTML = "delete";

  todayLi.classList.add(`section-today__item`);
  todayDelete.classList.add("material-symbols-outlined");

  todayText.innerHTML = todayInput.value;
  todayLi.appendChild(todayText);
  todayLi.appendChild(todayDelete);
  todayList.appendChild(todayLi);
  todayInput.value = "";

  todayDelete.addEventListener("click", onDeleteToday);
};

const onCreateTomorrow = () => {
  if (tomorrowInput.value === "") {
    alert("내용을 입력해주세요");
    return;
  }
  const tomorrowLi = document.createElement("li");
  const tomorrowText = document.createElement("span");
  const tomorrowDelete = document.createElement("button");
  tomorrowDelete.innerHTML = "delete";

  tomorrowLi.classList.add("section-tomorrow__item");
  tomorrowDelete.classList.add("material-symbols-outlined");

  tomorrowText.innerHTML = tomorrowInput.value;
  tomorrowLi.appendChild(tomorrowText);
  tomorrowLi.appendChild(tomorrowDelete);
  tomorrowList.appendChild(tomorrowLi);

  tomorrowInput.value = "";

  tomorrowDelete.addEventListener("click", onDeleteTomorrow);
};

todayInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") onCreateToday();
});
tomorrowInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") onCreateTomorrow();
});

todayButton.addEventListener("click", onFullToday);
tomorrowButton.addEventListener("click", onFullTomorrow);
togetherButton.addEventListener("click", onTogether);
todayInputButton.addEventListener("click", onCreateToday);
tomorrowInputButtton.addEventListener("click", onCreateTomorrow);
