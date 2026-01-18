document.querySelectorAll(".top-contact a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.title = link.getAttribute("aria-label");
  });
});
