import { setupKeyboardNavigation } from "./navigation.js";
import { gotoOrgHeading } from "./gotoOrgHeading.js";

document.addEventListener("DOMContentLoaded", () => {
  setupKeyboardNavigation();
  gotoOrgHeading();
});
