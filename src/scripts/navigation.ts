export const initNavigation = () => {
  const tabs = ["/", "/blogs/"];
  const items = document.querySelectorAll("li a");

  let active = tabs.indexOf(window.location.pathname);
  let active_item = -1;

  function highlight(index) {
    items.forEach((link) => link.classList.remove("selected"));
    if (items[index]) {
      items[index].classList.add("selected");
    }
  }

  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
      case "h":
        active = (active - 1 + tabs.length) % tabs.length;
        window.location.href = tabs[active];
        break;
      case "ArrowRight":
      case "l":
      case "L":
        active = (active + 1) % tabs.length;
        window.location.href = tabs[active];
        break;
      case "ArrowDown":
      case "j":
      case "J":
        active_item = (active_item + 1) % items.length;
        highlight(active_item);
        break;
      case "ArrowUp":
      case "k":
      case "K":
        active_item = (active_item + items.length - 1) % items.length;
        highlight(active_item);
        break;
      case "Enter":
        if (active_item >= 0) {
          window.location.href = items[active_item];
        }
        break;
      case "Escape":
        active_item = -1;
        items.forEach((link) => link.classList.remove("selected"));
        break;
    }
  });
}
