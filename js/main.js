// Variables
var allImages = Array.from(document.querySelectorAll("figure img"));
var leftArrow = document.querySelector(".fa-arrow-left");
var rightArrow = document.querySelector(".fa-arrow-right");
var closeBtn = document.querySelector(".fa-xmark");
var mainLayer = document.querySelector(".main__Layer");
var innerImage = document.querySelector(".inner__image");
var indexOfCurrentImage = 0;

// Events=>> clickk
for (var i = 0; i < allImages.length; i++) {
  allImages[i].addEventListener("click", function (e) {
    // Display the layer
    mainLayer.classList.remove("d-none");
    // Change background image of the inner image with the clicked image source
    //   clicked image then source
    var clickedImage = e.target;
    var clickedImageSource = clickedImage.getAttribute("src"); //../images/1.jpg
    innerImage.style.backgroundImage = `url(${clickedImageSource})`;
    indexOfCurrentImage = allImages.indexOf(clickedImage);
  });
}

// Function to get the previous element
function getPreviousElement() {
  indexOfCurrentImage--;
  if (indexOfCurrentImage == -1) {
    indexOfCurrentImage = allImages.length - 1;
  }
  var srcOfNextImage = allImages[indexOfCurrentImage].getAttribute("src");
  innerImage.style.backgroundImage = `url(${srcOfNextImage})`;
}

// Function to get the next element
function getNextElement() {
  indexOfCurrentImage++;
  if (indexOfCurrentImage == allImages.length) {
    indexOfCurrentImage = 0;
  }
  var srcOfNextImage = allImages[indexOfCurrentImage].getAttribute("src");
  innerImage.style.backgroundImage = `url(${srcOfNextImage})`;
}

// Function to close the element
function closeElement() {
  mainLayer.classList.add("d-none");
}

leftArrow.addEventListener("click", getPreviousElement);
rightArrow.addEventListener("click", getNextElement);
closeBtn.addEventListener("click", closeElement);

// Function to handle keyboard events
document.addEventListener("keydown", function (e) {
  if (mainLayer.classList.contains("d-none")) {
    return;
  }
  if (e.code === "ArrowLeft") {
    getPreviousElement();
  } else if (e.code === "ArrowRight") {
    getNextElement();
  } else if (e.code === "Escape") {
    closeElement();
  }
});

// Function to hide the layered div by clicking
mainLayer.addEventListener("click", function (e) {
  if (e.target === mainLayer) {
    closeElement();
  }
});
