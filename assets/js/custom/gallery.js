document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carousel-track");
  let scrollAmount = 0;
  let paused = false; // <-- new flag

  // Duplicate the images once more for a smooth loop
  track.innerHTML += track.innerHTML;

  function animate() {
    if (!paused) {
      // only move when not hovered
      scrollAmount += 1; // speed (pixels per frame)
      if (scrollAmount >= track.scrollWidth / 2) {
        scrollAmount = 0;
      }
      track.style.transform = `translateX(${-scrollAmount}px)`;
    }
    requestAnimationFrame(animate);
  }

  // Hover events to toggle pause
  track.addEventListener("mouseenter", () => (paused = true));
  track.addEventListener("mouseleave", () => (paused = false));

  // Initial styles
  track.style.display = "flex";
  track.style.transition = "none";

  animate();
});
