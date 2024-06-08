const section = document.querySelector(".bestsellers-section");

const obsCallback = function (entries, observer) {
  //   console.log(entries); // an ARRAY
  entries.forEach((entry) => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null, // root element ==>> viewport
  //   threshold: 0.1, // 0.1 ==>> 10% of intersection
  threshold: [0, 0.2, 1], // an array of thresholds

  // 0 ==>> 0% || callback will be fired as soon as the element enters or leaves the viewport
  // 1 ==>> 100% || callback will be fired when 100% of the element is visible in the viewport or not visible at all.
};

// observer ==> the observer object.
const observer = new IntersectionObserver(obsCallback, obsOptions);

// observing 'section' ==>> target element
observer.observe(section);
