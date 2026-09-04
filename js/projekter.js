const projects = [
  {
    semester: 1,
    title: "Flow 1 – Billedbehandling & Prototype",
    description:
      "Fokus på billedredigering, webdesign og opbygning af prototype.",
    image: "../billeder/Postcards-1.png",
    link: "flow1.html",
    available: true,
  },
  {
    semester: 1,
    title: "Flow 2 – Byg dit første website",
    description: "Udvikling af første fulde website i ren HTML og CSS.",
    image: "../billeder/cykelpige.png",
    link: "flow2.html",
    available: true,
  },
  {
    semester: 1,
    title: "Flow 3 – Visuelt koncept",
    description:
      "Design af farver, typografi, identitet og grafiske elementer.",
    image: "../billeder/lpcover.png",
    link: "flow3.html",
    available: true,
  },
  {
    semester: 1,
    title: "Flow 4 – Kampagne",
    description: "Kampagneudvikling på tværs af digitale platforme.",
    image: "../billeder/kampagneside.png",
    link: "flow4.html",
    available: true,
  },
  {
    semester: 2,
    title: "Flow 1 – Wordpress & SEO",
    description: "Projektet fra dette flow er ikke længere tilgængeligt.",
    available: false,
  },
  {
    semester: 2,
    title: "Flow 2 – Design Thinking, Avanceret Figma & InDesign",
    description:
      "Design af en digital løsning til udlejning af elcykler i Lyngby. Projektet blev udviklet med fokus på Design Thinking, brugeroplevelse og interaktiv prototyping i Figma.",
    image: "../billeder/lyngbyconnect.png",
    link: "semester2-flow2.html",
    available: true,
  },

  {
    semester: 2,
    title: "Flow 3 – Interaktiv frontend",
    description:
      "Udvikling af en interaktiv slikbutik, hvor brugeren bygger sit eget Babel-tårn af slik. Projektet kombinerer HTML, CSS og JavaScript med dynamiske produkter, spil-logik, prisberegning og brugerinteraktion.",
    image: "../billeder/tower.jpg",
    link: "semester2-flow3.html",
    available: true,
  },
  {
    semester: 2,
    title: "Flow 4 – Oplysningskampagne",
    description:
      "Udvikling af en datavisualiseringsvideo baseret på research og statistiske data. Projektet kombinerer informationsdesign, storytelling, storyboard og visuel formidling.",
    image: "../billeder/flow4-datavisualisering.png",
    link: "semester2-flow4.html",
    available: true,
  },
  {
    semester: 2,
    title: "Flow 5 – Eksamensprojekt",
    description:
      "Et samlet eksamensprojekt, hvor design, brugerforståelse og frontend-udvikling kombineres i én færdig løsning.",
    image: "../billeder/eksamen-guide.png",
    link: "semester2-flow5.html",
    available: true,
  },
];

projects.forEach((project) => {
  const grid = document.getElementById(`project-grid-${project.semester}`);
  if (!grid) return;

  const card = document.createElement("article");
  card.className = "card";
  card.dataset.semester = project.semester;

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    ${
      project.available
        ? `
      <img src="${project.image}" class="card-image" alt="${project.title}" />
      <a href="${project.link}" class="btn-secondary">Se projektet</a>
    `
        : '<div class="project-unavailable">Projekt ikke tilgængeligt</div>'
    }
  `;

  grid.appendChild(card);
});

document.querySelectorAll(".project-filters button").forEach((button) => {
  button.addEventListener("click", () => {
    const semester = button.dataset.semester;

    document.querySelectorAll(".project-filters button").forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    document.querySelectorAll(".card").forEach((card) => {
      card.hidden = semester !== "all" && card.dataset.semester !== semester;
    });
  });
});
