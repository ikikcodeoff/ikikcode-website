(function () {
  emailjs.init("TON_PUBLIC_KEY"); // ex: AbCdEf123
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  status.innerText = "⏳ Envoi en cours...";

  emailjs.sendForm(
    "TON_SERVICE_ID",   // ex: service_gmail
    "TON_TEMPLATE_ID",  // ex: template_contact
    this
  )
  .then(() => {
    status.innerText = "✅ Message envoyé avec succès";
    form.reset();
  })
  .catch(() => {
    status.innerText = "❌ Erreur lors de l’envoi";
  });
});
