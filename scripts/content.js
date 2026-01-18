async function loadJSON(path) {
  const res = await fetch(path);
  return res.json();
}

/* JOURNEY */
/* JOURNEY MAP WITH MOTION */
loadJSON("data/journey.json").then(items => {
  const container = document.getElementById("journeyContainer");

  items.forEach(j => {
    const div = document.createElement("div");
    div.className = "timeline-item";

    div.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h4>${j.title}</h4>
        <span>${j.period}</span>
        <div class="timeline-details">
          <p>${j.description}</p>
        </div>
      </div>
    `;

    div.onclick = () => div.classList.toggle("active");
    container.appendChild(div);
  });

  // Scroll animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".timeline-item").forEach(item => {
    observer.observe(item);
  });
});


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

/* CONTACT */
loadJSON("data/contact.json").then(c => {
  const container = document.getElementById("contactContainer");

  container.innerHTML = `
    <a href="${c.linkedin}" target="_blank">LinkedIn</a>
    <a href="${c.github}" target="_blank">GitHub</a>
    <a href="${c.leetcode}" target="_blank">LeetCode</a>
    <a href="mailto:${c.email}">${c.email}</a>
    <a href="tel:${c.phone}">${c.phone}</a>
  `;
});
