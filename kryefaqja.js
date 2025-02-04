var carousel = 1;

function updateCarousel() {
  // Remove current-card, prev-card, and next-card classes from all cards
  for (var i = 1; i <= 3; i++) {
    var card = document.getElementById("card-" + i);
    card.classList.remove("current-card", "prev-card", "next-card");
  }

  // Add current-card class to the current carousel card
  var currentCard = document.getElementById("card-" + carousel);
  currentCard.classList.add("current-card");

  // Calculate previous and next indices using modulo arithmetic
  var prevIndex = carousel - 1 <= 0 ? 3 : carousel - 1;
  var nextIndex = carousel + 1 > 3 ? 1 : carousel + 1;

  console.log("Current carousel:", carousel);
  console.log("Previous index:", prevIndex);
  console.log("Next index:", nextIndex);

  // Add prev-card and next-card classes to respective cards
  var prevCard = document.getElementById("card-" + prevIndex);
  prevCard.classList.add("prev-card");
  var nextCard = document.getElementById("card-" + nextIndex);
  nextCard.classList.add("next-card");
}

function incrementValue() {
  carousel = (carousel % 3) + 1;
  updateCarousel();
}

function decreaseValue() {
  carousel = carousel === 1 ? 3 : carousel - 1;
  updateCarousel();
}

var screenWidth = window.innerWidth;
var albania = document.getElementById("albania");
var paragraf = document.getElementById("paragraf");
var icon1 = document.getElementById("icon-foot1");
var icon2 = document.getElementById("icon-foot2");
var icon3 = document.getElementById("icon-foot3");
var icon4 = document.getElementById("icon-foot4");

addEventListener("resize", function () {
  screenWidth = window.innerWidth;
  resize();
});

function resize() {
  if (screenWidth <= 768) {
    icon1.innerHTML = "";
    icon2.innerHTML = "";
    icon3.innerHTML = "";
    icon4.innerHTML = "";
    albania.innerHTML = "AL |";
  }
}

function toggle() {
  var dropdown = document.getElementById("phone-dropdown");
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
    dropdown.classList.add("hidden");
  } else {
    dropdown.classList.remove("hidden");
    dropdown.classList.add("show");
  }
}

resize();

// Initial call to update the carousel
updateCarousel();

const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");

// Add an index to each image
images.forEach((image, idx) => {
  image.dataset.index = idx;
});

// Clone first and last few images to create an infinite scroll effect
const clonesBefore = [];
const clonesAfter = [];
for (let i = 0; i < 3; i++) {
  const cloneFirst = images[i].cloneNode(true);
  const cloneLast = images[images.length - 1 - i].cloneNode(true);
  cloneFirst.classList.add("clone");
  cloneLast.classList.add("clone");
  slider.appendChild(cloneFirst);
  slider.insertBefore(cloneLast, images[0]);
  clonesBefore.push(cloneLast);
  clonesAfter.push(cloneFirst);
}

let index = 3; // Start from the first actual image
const slideInterval = 3000; // 3 seconds
let intervalId;

function slide(targetIndex = null) {
  if (targetIndex !== null) {
    index = targetIndex + 3; // Adjust for the cloned images
  } else {
    index++;
  }
  const offset = index * -385;
  slider.style.transition = "transform 1s ease";
  slider.style.transform = `translateX(${offset}px)`;

  // Handle infinite scroll effect
  slider.addEventListener("transitionend", handleTransitionEnd);
}

function handleTransitionEnd() {
  slider.removeEventListener("transitionend", handleTransitionEnd);

  if (index >= images.length + 3) {
    index = 3;
    slider.style.transform = `translateX(-1540px)`; // 3 * -385
  } else if (index <= 2) {
    index = images.length + 2;
    slider.style.transform = `translateX(${index * -385}px)`;
  }

  // Force reflow to ensure the transition is applied correctly
  slider.offsetHeight; // Trigger reflow
  slider.style.transition = "transform 1s ease";
}

function startSlideShow() {
  intervalId = setInterval(() => slide(), slideInterval);
}

function stopSlideShow() {
  clearInterval(intervalId);
}

startSlideShow();

images.forEach((image) => {
  image.addEventListener("click", () => {
    const targetIndex = parseInt(image.dataset.index, 10);
    slide(targetIndex);
    stopSlideShow();
    startSlideShow();
  });
});

function increaseSlider() {
  slide();
  stopSlideShow();
  startSlideShow();
}

function decreaseSlider() {
  index--;
  const offset = index * -385;
  slider.style.transform = `translateX(${offset}px)`;
  stopSlideShow();
  startSlideShow();

  // Handle infinite scroll effect
  slider.addEventListener("transitionend", handleTransitionEnd);
}
