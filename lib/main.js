document.addEventListener("DOMContentLoaded", function () {
  function enterFullScreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen(); // Firefox
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen(); // Safari
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen(); // IE/Edge
    }
  }

  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  var startButton = document.getElementById("start-button");

  var pageOne = document.getElementById("page-one");

  var pageTwo = document.getElementById("page-two");

  var pageThree = document.getElementById("page-three");

  var pageFour = document.getElementById("page-four");

  var pageFive = document.getElementById("page-five");

  var homeButton = document.getElementById("wrapper-page-one");

  var secondPageButton = document.getElementById("wrapper-page-two");

  var pageThreeButton = document.getElementById("wrapper-page-three");

  var pageFourButton = document.getElementById("wrapper-page-four");

  var pageFiveButton = document.getElementById("wrapper-page-five");

  var pageSixButton = document.getElementById("wrapper-page-six");

  var pageSevenButton = document.getElementById("wrapper-page-seven");

  var reloadButton = document.getElementById("wrapper-page-eight");

  startButton.addEventListener("click", function () {
    pageOne.classList.add("hidden");
    pageOne.classList.remove("show");
    pageTwo.classList.remove("hidden");
    pageTwo.classList.add("show");
    enterFullScreen(document.body);
  });

  homeButton.addEventListener("click", function () {
    pageOne.classList.remove("hidden");
    pageOne.classList.add("show");
    pageTwo.classList.add("hidden");
    pageTwo.classList.remove("show");
    exitFullscreen();
  });

  secondPageButton.addEventListener("click", function () {
    pageTwo.classList.remove("show");
    pageTwo.classList.add("hidden");
    pageThree.classList.remove("hidden");
    pageThree.classList.add("show");
    if (!enterFullScreen(document.body)) {
      enterFullScreen(document.body);
    }
  });

  pageThreeButton.addEventListener("click", function () {
    pageThree.classList.remove("show");
    pageThree.classList.add("hidden");
    pageTwo.classList.remove("hidden");
    pageTwo.classList.add("show");
    if (!enterFullScreen(document.body)) {
      enterFullScreen(document.body);
    }
  });

  pageFourButton.addEventListener("click", function () {
    pageThree.classList.add("hidden");
    pageThree.classList.remove("show");
    pageFour.classList.remove("hidden");
    pageFour.classList.add("show");
    if (!enterFullScreen(document.body)) {
      enterFullScreen(document.body);
    }
  });

  pageFiveButton.addEventListener("click", function () {
    pageFour.classList.add("hidden");
    pageFour.classList.remove("show");
    pageThree.classList.add("show");
    pageThree.classList.remove("hidden");
    if (!enterFullScreen(document.body)) {
      enterFullScreen(document.body);
    }
  });

  pageSixButton.addEventListener("click", function () {
    pageFive.classList.remove("hidden");
    pageFive.classList.add("show");
    pageFour.classList.remove("show");
    pageFour.classList.add("hidden");
    if (!enterFullScreen(document.body)) {
      enterFullScreen(document.body);
    }
  });

  pageSevenButton.addEventListener("click", function () {
    pageFive.classList.add("hidden");
    pageFive.classList.remove("show");
    pageFour.classList.add("show");
    pageFour.classList.remove("hidden");
    if (!enterFullScreen(document.body)) {
      enterFullScreen(document.body);
    }
  });

  reloadButton.addEventListener("click", function () {
    pageFive.classList.add("hidden");
    pageFive.classList.remove("show");
    pageOne.classList.add("show");
    pageOne.classList.remove("hidden");
    exitFullscreen();
  });
});
