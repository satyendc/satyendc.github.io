body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: linear-gradient(180deg, #020617, #020617);
  color: #e5e7eb;
}

.hero {
  padding: 6rem 1rem;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero h2 {
  font-weight: 500;
}

.section {
  max-width: 900px;
  margin: auto;
  padding: 4rem 1rem;
}

h3 {
  border-left: 4px solid #38bdf8;
  padding-left: 1rem;
  margin-bottom: 2rem;
}

.timeline {
  border-left: 2px solid #38bdf8;
  padding-left: 2rem;
}

.timeline-item {
  margin-bottom: 2rem;
}

.timeline-item span {
  color: #38bdf8;
  font-weight: bold;
}

.project-card {
  background: #020617;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.tags {
  color: #94a3b8;
  font-size: 0.85rem;
}

.toggle {
  margin-top: 1rem;
  background: none;
  color: #38bdf8;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.details {
  display: none;
  margin-top: 1rem;
}

.project-card.active .details {
  display: block;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skills li {
  background: #020617;
  border: 1px solid #1e293b;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  list-style: none;
}

.links a {
  display: block;
  color: #38bdf8;
  margin-bottom: 0.5rem;
  text-decoration: none;
}

footer {
  text-align: center;
  padding: 2rem;
  color: #94a3b8;
}
