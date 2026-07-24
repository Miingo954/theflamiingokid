document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");

  if (!slides.length) return;

  slides[0].classList.add("is-active");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          slides.forEach(slide => {
            slide.classList.remove("is-active");
          });

          entry.target.classList.add("is-active");
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  slides.forEach(slide => {
    observer.observe(slide);
  });
});
