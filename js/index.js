const tools = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    category: "Programmering",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Programmering",
  },
  {
    name: "Adobe Photoshop",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    category: "Design & Grafik",
  },
  {
    name: "Adobe Illustrator",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    category: "Design & Grafik",
  },
  {
    name: "Adobe Premiere Pro",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
    category: "Design & Grafik",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    category: "UI/UX & Prototyping",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Programmering",
  },
  {
    name: "Visual Studio Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    category: "Udviklingsværktøjer",
  },
  {
    name: "IntelliJ IDEA",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
    category: "Udviklingsværktøjer",
  },
  {
    name: "PyCharm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
    category: "Udviklingsværktøjer",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Udviklingsværktøjer",
  },
];

const toolsGrid = document.getElementById("tools-grid");

if (toolsGrid) {
  const categories = [...new Set(tools.map((tool) => tool.category))];

  toolsGrid.innerHTML = categories
    .map(
      (category) => `
        <article class="tool-card">
          <h3>${category}</h3>
          <ul class="tool-list">
            ${tools
              .filter((tool) => tool.category === category)
              .map(
                (tool) => `
                  <li>
                    <img src="${tool.icon}" alt="${tool.name} ikon" />
                    ${tool.name}
                  </li>
                `,
              )
              .join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}
