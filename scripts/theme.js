const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
  const theme = document.body.dataset.theme;
  document.body.dataset.theme = theme === "dark" ? "light" : "dark";
};
