const footer = document.getElementById("site-footer");

if (footer) {
  footer.innerHTML = `
    <p>
      © <span id="year"></span>
      Jesper Deetho Jessen • Multimediedesigner
    </p>
  `;

  document.getElementById("year").textContent = new Date().getFullYear();
}
