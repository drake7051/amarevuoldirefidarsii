window.addEventListener("load", () => {
  const video = document.getElementById("introVideo");
  const playBtn = document.getElementById("playBtn");
  const infoSection = document.querySelector(".info-section");

  // fix altezza mobile
  const fixAppHeight = () => {
    document.documentElement.style.setProperty(
      "--app-height",
      `${window.innerHeight}px`
    );
  };
  fixAppHeight();

  // play = avvia video + audio
  playBtn.addEventListener("click", () => {
    video.muted = false;
    video.currentTime = 0;
    video.play().then(() => {
      playBtn.classList.add("hidden");
    });
  });

  // tap sullo schermo = pausa/play
  video.addEventListener("click", () => {
    if (video.paused) video.play();
    else video.pause();
  });

  // fade-in sezione info
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        infoSection.classList.add("visible");
        observer.unobserve(infoSection);
      }
    });
  });
  observer.observe(infoSection);

  // scroll hint
  const scrollHint = document.querySelector(".scroll-hint");
  scrollHint.addEventListener("click", () => {
    infoSection.scrollIntoView({ behavior: "smooth" });
  });
  setTimeout(() => scrollHint.classList.add("visible"), 5000);
});
