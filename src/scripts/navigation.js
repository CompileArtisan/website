export function setupKeyboardNavigation() {
  const tabs = ["/", "/blogs/", "/work/"];
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
        active = (active - 1 + tabs.length) % tabs.length;
        window.location.href = tabs[active];
        break;
      case "ArrowRight":
        active = (active + 1) % tabs.length;
        window.location.href = tabs[active];
        break;
      case "ArrowDown":
        active_item = (active_item + 1) % items.length;
        highlight(active_item);
        break;
      case "ArrowUp":
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
