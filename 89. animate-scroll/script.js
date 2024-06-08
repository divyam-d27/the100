// REVEALING elements on SCROLL

const allSections = document.querySelectorAll(".section"); // selecting all the sections

// observer callback
const revealSection = function (entries, observer) {
  const [entry] = entries; // getting entry out of entries

  // entry.target ==> current elemnt intersecting the viewport

  if (!entry.isIntersecting) return; // using "Guard Clause" ==> inorder to animate first section

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target); // unobserve, because we need the effect only once.
};

// Intersection Observer API
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach((section) => {
  sectionObserver.observe(section); // observing all the sections
  section.classList.add("section--hidden"); // add "hidden" class to all the sections..
});
