function enterSite() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("site").style.display = "block";
  localStorage.setItem("introSeen", "1");
}

if (localStorage.getItem("introSeen")) enterSite();

const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100)
      el.classList.add("active");
  });
});
