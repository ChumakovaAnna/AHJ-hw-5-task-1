export default class Popover {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.click = false;
    this.container = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("container is not HTMLElement");
    }
    this.container = container;
  }

  renderPopover() {
    const popover = document.createElement("div");
    popover.classList.add("popover");
    popover.innerHTML = `
    <h3 class="title">
      ${this.title}     
    </h3>
    <div class="text">
      ${this.text}
    </div>
    <div class="arrow">
      <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 33.27 21.09" enable-background="new 0 0 33.27 21.09" xml:space="preserve">
        <polygon fill="#CCCCCC" points="33.27,4.46 16.63,21.09 0,4.46 4.46,0 28.81,0 "/>
        <polygon fill="#FFFFFF" points="30.81,0 2.46,0 0,0 0,4.46 2,4.46 16.63,19.09 31.27,4.46 33.27,4.46 33.27,0 "/>
      </svg>
    </div>`;
    this.container.insertAdjacentElement("afterbegin", popover);
    popover.style.left = `-${Popover.findPosition()}px`;
  }

  isClick() {
    if (!this.click) {
      this.click = true;
      return true;
    }
    this.click = false;
    return false;
  }

  deletePopover() {
    const popover = this.container.childNodes[0];
    this.container.removeChild(popover);
  }

  static findPosition() {
    const button = document.querySelector(".button");
    const buttonWidth = button.offsetWidth;

    const popover = document.querySelector(".popover");
    const popoverWidth = popover.offsetWidth;

    return (popoverWidth - buttonWidth) / 2;
  }
}
