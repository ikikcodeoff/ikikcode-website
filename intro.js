window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const video = document.getElementById("introVideo");

  if (!intro || !video) return;


  video.play().catch(() => {});

  setTimeout(() => {
    intro.classList.add("hide");
  }, 7000);
});
