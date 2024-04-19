function toggleNav() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

var topButton = document.getElementById("topButton");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
// Add click event listeners to each job box
document.getElementById("full-time").addEventListener("click", function() {
    window.location.href = "full_time_jobs.html"; // Replace with the URL for full-time jobs page
  });
  
  document.getElementById("part-time").addEventListener("click", function() {
    window.location.href = "part_time_jobs.html"; // Replace with the URL for part-time jobs page
  });
  
  document.getElementById("one-hour").addEventListener("click", function() {
    window.location.href = "one_hour_gigs.html"; // Replace with the URL for one-hour gigs page
  });
  