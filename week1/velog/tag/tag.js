const inputTag = document.querySelector(".tag__input");
const tagList = document.querySelector(".tag__list");
let tagArr = [];

const checkDuplicate = (value) => {
  for (let i = 0; i < tagArr.length; i++) {
    if (tagArr[i] === value) {
      return true;
    }
  }
};

const onDelete = (e) => {
  e.target.remove();
};
const onCreate = (tag) => {
  if (checkDuplicate(tag.value)) {
    alert("중복된 태그가 있습니다");
    inputTag.value = "";
    return;
  }
  const tagItem = document.createElement("li");
  tagItem.classList.add("tag__item");
  tagItem.innerHTML = tag.value;
  tagItem.addEventListener("click", onDelete);
  tagList.appendChild(tagItem);
  tagArr.push(tag.value);
  inputTag.value = "";
};

inputTag.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onCreate(inputTag);
  }
});
