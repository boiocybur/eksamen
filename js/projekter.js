const projects = [
  {
    semester: 1,
    title: "Cykelpartiet",
    description:
      "Website i HTML og CSS for et fiktivt cykelparti. Responsivt layout, visuel identitet og første fulde site.",
    image: "../billeder/cykelpige.png",
    link: "cykelpartiet/",
    available: true,
  },
  {
    semester: 1,
    title: "Kommunalvalg-kampagne",
    description:
      "Kampagnesite på tværs af skærme: budskab, visuelle midler og landingside.",
    image: "../billeder/kampagneside.png",
    link: "kommunalvalg/",
    available: true,
  },
  {
    semester: 1,
    title: "Postkort og billedserie",
    description:
      "Billedbehandling, komposition og prototype til en serie trykte og digitale motiver.",
    image: "../billeder/Postcards-1.png",
    link: "flow1.html",
    available: true,
  },
  {
    semester: 1,
    title: "Cover og visuel identitet",
    description:
      "Farver, typografi og grafiske elementer samlet i ét visuelt udtryk.",
    image: "../billeder/lpcover.png",
    link: "flow3.html",
    available: true,
  },
  {
    semester: 2,
    title: "HR-Video",
    description:
      "Website til professionelle ansøgningsvideoer. Frontend, struktur og brugerrejse fra idé til færdig løsning.",
    image: "../billeder/hrvideo.png",
    link: "https://jdjessen.com/hr-video/",
    available: true,
  },
  {
    semester: 2,
    title: "Lyngby Connect",
    description:
      "UX og Figma-prototype til udlejning af elcykler i Lyngby. Design thinking, flows og interaktiv prototype.",
    image: "../billeder/lyngbyconnect.png",
    link: "semester2-flow2.html",
    available: true,
  },
  {
    semester: 2,
    title: "Sliktårnet",
    description:
      "Interaktiv slikbutik i HTML, CSS og JavaScript: produkter, spil-logik, pris og brugerinteraktion.",
    image: "../billeder/tower.jpg",
    link: "semester2-flow3.html",
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
