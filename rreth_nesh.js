//qitu ja nis kodi per qdo website qe kina me perdor
var screenWidth = window.innerWidth;
var albania = document.getElementById("albania");

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

addEventListener("resize", function () {
  screenWidth = window.innerWidth;
  resize();
});

function resize() {
  var icon1 = document.getElementById("icon-foot1");
  var icon2 = document.getElementById("icon-foot2");
  var icon3 = document.getElementById("icon-foot3");
  var icon4 = document.getElementById("icon-foot4");
  if (screenWidth <= 768) {
    albania.innerHTML = "AL |";
    icon1.innerHTML = "";
    icon2.innerHTML = "";
    icon3.innerHTML = "";
    icon4.innerHTML = "";
  }
}

resize();
//qitu maron kodi per qdo website
