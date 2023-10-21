'use strict';

/**
 * navbar variables
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});


 // Get a reference to the button
 const careerButton = document.getElementById('careerButton');

 // Add a click event listener to the button
 careerButton.addEventListener('click', function() {
     // Redirect to the career.index page
     window.location.href = 'https://www.linkedin.com/company/innoweave-biocare/jobs/'; // Replace with the actual URL
 });
 

 
  // Get a reference to the button
  const seeMoreBlogs = document.getElementById('seeMoreBlogs');

  // Add a click event listener to the button
  seeMoreBlogs.addEventListener('click', function() {
      // Redirect to the career.index page
      window.location.href = 'https://medium.com/@innoweavebiocare/'; // Replace with the actual URL
  });


var isAnimating = false;
var currentIndex = 0;
var cardWidth = document.querySelector(".custom-card").offsetWidth;
var numCards = document.querySelectorAll(".custom-card").length;

function scrollCustomCard(elem, direction) {
    if (!elem || isAnimating) {
        return;
    }

    var scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    var scrollLeft = elem.scrollLeft;

    isAnimating = true;

    var startTime = null;
    function animateScroll(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        var progress = timestamp - startTime;
        var duration = 300; // Animation duration in milliseconds

        if (progress < duration) {
            elem.scrollLeft = easeInOutQuad(progress, scrollLeft, scrollAmount, duration);
            requestAnimationFrame(animateScroll);
        } else {
            elem.scrollLeft = scrollLeft + scrollAmount;
            currentIndex = direction === "left" ? (currentIndex - 1 + numCards) % numCards : (currentIndex + 1) % numCards;
            isAnimating = false;
        }
    }

    requestAnimationFrame(animateScroll);
}

// Easing function for smoother animation
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
}

function initCustomDealCarousel(dealCarouselID) {
    var target = document.querySelector("#" + dealCarouselID + " .custom-carousel-flexbox");

    document.querySelector("#" + dealCarouselID + " .custom-scroll-left").addEventListener("click",
        function () {
            scrollCustomCard(target, "left");
        }
    );

    document.querySelector("#" + dealCarouselID + " .custom-scroll-right").addEventListener("click",
        function () {
            scrollCustomCard(target, "right");
        }
    );

    // Rotate every 10 seconds
    setInterval(function () {
        scrollCustomCard(target, "right");
    }, 10000);
}

// Initiate the container with ID
initCustomDealCarousel('custom_container');

    
