const form = document.querySelector(".form");
const status = document.getElementById("form-status");

form?.addEventListener("submit", () => {
  status.textContent = "Sender besked...";
});
const email = document.getElementById("email");

email?.addEventListener("input", () => {
  if (!email.validity.valid) {
    email.setCustomValidity("Indtast en gyldig e-mailadresse.");
  } else {
    email.setCustomValidity("");
  }
});
