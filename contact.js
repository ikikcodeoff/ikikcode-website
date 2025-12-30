(function () {
  emailjs.init("PUBLIC_KEY_ICI");
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  const status = document.getElementById("status");
  status.textContent = "Envoi en cours...";

  emailjs.sendForm(
    "SERVICE_ID_ICI",
    "TEMPLATE_ID_ICI",
    this
  ).then(() => {
    status.textContent = "Message envoyé ✅";
    this.reset();
  }).catch(() => {
    status.textContent = "Erreur ❌";
  });
});
