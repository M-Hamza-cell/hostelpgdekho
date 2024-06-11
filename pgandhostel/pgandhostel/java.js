// Function to initialize all slideshows on the page
function initializeSlideshows() {
    var slideshowGroups = document.getElementsByClassName("slideshow-group");
    for (var i = 0; i < slideshowGroups.length; i++) {
      showSlides(1, i);
    }
  }
  
  // Function to change slide
  function plusSlides(n, slideshowNum) {
    showSlides(slideIndices[slideshowNum] += n, slideshowNum);
  }
  
  // Function to set the current slide
  function currentSlide(n, slideshowNum) {
    showSlides(slideIndices[slideshowNum] = n, slideshowNum);
  }
  
  // Array to hold the index for each slideshow
  var slideIndices = [];
  
  // Function to show slides
  function showSlides(n, slideshowNum) {
    var i;
    var slideshowGroup = document.getElementsByClassName("slideshow-group")[slideshowNum];
    var slides = slideshowGroup.getElementsByClassName("mySlides");
    var dots = slideshowGroup.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndices[slideshowNum] = 1; }
    if (n < 1) { slideIndices[slideshowNum] = slides.length; }
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndices[slideshowNum] - 1].style.display = "block";
    dots[slideIndices[slideshowNum] - 1].className += " active";
  }
  
  // Initialize slideIndices array and start all slideshows
  window.onload = function() {
    var slideshowGroups = document.getElementsByClassName("slideshow-group");
    for (var i = 0; i < slideshowGroups.length; i++) {
      slideIndices[i] = 1;
    }
    initializeSlideshows();
  }

  // JavaScript code for slideshow functionality
var slideshows = document.querySelectorAll('.slideshow-container');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
    var slides = slideshow.querySelectorAll('.slides');
    var dotsContainer = slideshow.querySelector('.dots-container');
    
    slides.forEach(function(slide, index) {
        slide.style.display = "none";
        slide.style.width = "100%";
    });

    var slideIndex = 0;

    // Create and append navigation dots
    slides.forEach(function(_, index) {
        var dot = document.createElement('span');
        dot.classList.add('dot');
        dot.onclick = function() {
            moveSlide(index);
        };
        dotsContainer.appendChild(dot);
    });

    // Show the first slide
    slides[0].style.display = "block";
    moveSlide(0);

    // Move to the specified slide
    function moveSlide(index) {
        if (index < 0 || index >= slides.length) return;
        slides.forEach(function(slide) {
            slide.style.display = "none";
        });
        slideIndex = index;
        slides[index].style.display = "block";
        updateDots();
    }

    // Update navigation dots
    function updateDots() {
        var dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach(function(dot, index) {
            if (index === slideIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}
