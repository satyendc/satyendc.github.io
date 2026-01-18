async function loadJSON(path) {
  const res = await fetch(path);
  return res.json();
}

/* PROJECTS */
loadJSON("data/projects.json").then(projects => {
  const container = document.getElementById("projectsContainer");

  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "project-card";

    div.innerHTML = `
      <div class="collapsible">${p.title}</div>
      <div class="hidden">
        <p><b>Problem:</b> ${p.problem}</p>
        <p><b>Architecture:</b> ${p.architecture}</p>
        <p><b>Trade-offs:</b> ${p.tradeoffs}</p>
        <p><b>Learnings:</b> ${p.learning}</p>
      </div>
    `;

    div.querySelector(".collapsible").onclick = () =>
      div.querySelector(".hidden").classList.toggle("hidden");

    container.appendChild(div);
  });
});

/* LEARNING */
loadJSON("data/learning.json").then(items => {
  const container = document.getElementById("learningContainer");
  items.forEach(i => {
    container.innerHTML += `<p>• ${i}</p>`;
  });
});

/* VISION */
loadJSON("data/vision.json").then(v => {
  document.getElementById("visionContainer").innerHTML = `<p>${v.text}</p>`;
});
