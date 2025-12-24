emailjs.init("ph8J-e3J4qrubSfyG");

document.getElementById("contact-form").addEventListener("submit",e=>{
  e.preventDefault();
  const s=document.getElementById("status");
  s.textContent="Envoi...";

  emailjs.send("service_aw8mbwd","template_a386pt2",{
    name:e.target.name.value,
    email:e.target.email.value,
    message:e.target.message.value
  }).then(()=>{
    s.textContent="Message envoyé ✅";
    e.target.reset();
  }).catch(()=>{
    s.textContent="Erreur ❌";
  });
});
