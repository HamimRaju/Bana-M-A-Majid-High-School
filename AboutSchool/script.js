// SCHOOL INTRO SCROLL REVEAL
(function () {
  const items = document.querySelectorAll(".reveal-intro");
  if (!("IntersectionObserver" in window) || !items.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => io.observe(el));
})();
