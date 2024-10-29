const checkBox = document.querySelector(".item-checkbox");
const checkBoxLabel = document.querySelector(".label");
const inputField = document.getElementById("text-field");
const addItemButton = document.querySelector("[data-add-item]");
const listContainer = document.querySelector(".container");

addItemButton.addEventListener("click", () => {
  const newItem = document.createElement("div");
  newItem.classList.add("list-item");

  const newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";
  newCheckBox.classList.add("item-checkbox");

  const newLabelItem = document.createElement("label");
  newLabelItem.textContent = inputField.value;
  newLabelItem.classList.add("item-label");
  newLabelItem.htmlFor = newCheckBox;

  newItem.appendChild(newCheckBox);
  newItem.appendChild(newLabelItem);
  listContainer.appendChild(newItem);
});

checkBox.addEventListener("change", (e) => {
  const checkBoxLabelAgain = e.target.nextElementSibling;

  if (e.target.matches(".item-checkbox")) {
    checkBoxLabelAgain.classList.toggle("checked");
  }
});

// const addBoxButton = document.querySelector("[data-add-box]");
// const grid = document.querySelector(".grid");
// const boxes = document.querySelectorAll(".box");

// // Adds functionality to "Create" button: creates div with a class of "box", adds / appends this new div within "grid" div
// addBoxButton.addEventListener("click", () => {
//   const box = document.createElement("div");
//   box.classList.add("box");
//   grid.append(box);
// });

// // Adds click event listener to ANY class that is clicked on (target) named "box"
// // When clicked, it toggles / switches to the "clicked" CSS class, which changes the color to blue
// // This is called EVENT DELEGATION - e.g. passing an event at a top level down to child elements (e.g. any "box" clicked within "grid" should have X actions)
// grid.addEventListener("click", (e) => {
//   if (e.target.matches(".box")) {
//     e.target.classList.toggle("clicked");
//   }
// });

// function addGlobalEventListener() {
//   grid.addEventListener("click", (e) => {
//     if (e.target.matches(".box")) {
//       e.target.classList.toggle("clicked");
//     }
//   });
// }
