document.addEventListener("DOMContentLoaded", function () {
  function renderMath() {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
      trust: true,
      strict: false,
    });
  }

  // Initial render
  renderMath();

  // Re-render on Astro page transitions
  document.addEventListener("astro:page-load", renderMath);
  document.addEventListener("astro:after-swap", renderMath);
});
