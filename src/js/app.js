import Popover from "./Popover";

console.log("Started");

const popover = new Popover("Popover title", "And here's some amazing content. It's very engaging. Right?");
popover.bindToDOM(document.querySelector(".container"));

const button = document.querySelector(".button");

button.addEventListener("click", () => {
  if (popover.isClick()) {
    popover.renderPopover();
  } else {
    popover.deletePopover();
  }
});
