const header = document.getElementById("site-header");

const month = new Date().getMonth() + 1;
const season =
  month === 12 || month <= 2
    ? "winter"
    : month <= 5
      ? "spring"
      : month <= 8
        ? "summer"
        : "autumn";

document.documentElement.dataset.season = season;

if (header) {
  header.innerHTML = `
    <div class="logo">
      <a href="index.html">Jesper Deetho Jessen</a>
    </div>

    <nav class="navigation">
      <a href="index.html">Forside</a>
      <a href="om-mig.html">Om Mig</a>
      <a href="projekter.html">Projekter</a>
      <a href="kontakt.html">Kontakt</a>
    </nav>
  `;
}
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navigation a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
