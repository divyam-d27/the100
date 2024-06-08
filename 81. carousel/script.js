const slider = function () {
  const slides = document.querySelectorAll(".slide");

  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let currentSlide = 0;
  const maxSlide = slides.length; // we can read "length" on NodeList as well..

  const dotContainer = document.querySelector(".dots");

  // FUNCTIONS

  // adding DOTS
  // we need to add "dot" for each slide, hence we will loop over it..
  const createDots = function () {
    slides.forEach((_, i) => {
      // creating dot.. acc to "index"
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active")); // removing 'active' class from ALL slide

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`) // selecting all of ".dots__dot" class w/ "data-slide" attr using '[]'
      .classList.add("dots__dot--active");
  };

  // NEXT SLIDE ==>>

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  // going to next slide

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) currentSlide = 0;
    else currentSlide++;

    goToSlide(currentSlide);

    activateDot(currentSlide);
  };

  // Prev SLIDE

  const prevSlide = function () {
    if (currentSlide === 0) currentSlide = maxSlide - 1;
    else currentSlide--;
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  // func we need in the beining(i.e. intitialization)

  const init = function () {
    goToSlide(0);
    createDots(); // caliing before "activateDot"
    activateDot(0);
  };
  init();

  // EVENT HANDLERS

  btnRight.addEventListener("click", nextSlide);

  btnLeft.addEventListener("click", prevSlide);

  // adding "arrow" keys functionality

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  // Navigation through dots

  // eventDelegation
  dotContainer.addEventListener("click", function (e) {
    // console.log(e.target);
    if (e.target.classList.contains("dots__dot")) {
      // const slide = e.target.dataset.slide; // since "slide" and "slide" are same, we'll use destructuring
      const { slide } = e.target.dataset;

      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
