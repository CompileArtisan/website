export function gotoOrgHeading() {
  document.querySelectorAll('a[href^="#org"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("Link clicked:", link.href);

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const leftPanel = document.querySelector(".left-panel");

      if (targetElement && leftPanel) {
        const targetPosition = targetElement.offsetTop - leftPanel.offsetTop;
        leftPanel.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      } else {
        console.warn("Target not found or no left-panel:", targetId);
      }
    });
  });
}
