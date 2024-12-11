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
