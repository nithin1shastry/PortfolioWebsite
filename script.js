document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navbar = document.querySelector(".navbar");
  const closeBtn = document.querySelector(".close-btn");
  const homeLink = document.getElementById("home-link");
  const writingLink = document.getElementById("writing-link");
  const contactLink = document.getElementById("contact-link");
  // JavaScript function to toggle details

  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navbar.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
  });

  homeLink.addEventListener("click", () => {
    console.log("in home link");
    window.location.href = "./index.html"; // Redirect to the Home page
  });

  writingLink.addEventListener("click", () => {
    // Handle the behavior for the "Publications" button
    // For example, you can use smooth scrolling to scroll to the Publications section
    // or you can simply redirect to the Publications page
    navbar.classList.remove("active");
    window.location.href = "./publications.html";
  });

  contactLink.addEventListener("click", () => {
    console.log("contact button clicked");
    navbar.classList.remove("active");
    window.location.href = "./contact.html"; // Redirect to the Contact page
  });

  const toggleButtons = document.querySelectorAll(".toggle-button");

  // Add click event listener to each toggle button
  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Toggle the 'expanded' class on the parent element
      const card = this.parentElement;
      card.classList.toggle("expanded");

      // Get the details element within the card
      const details = card.querySelector(".work-details");

      // Toggle the display of the details element
      if (details.style.display === "block") {
        details.style.display = "none";
      } else {
        details.style.display = "block";
      }
    });
  });
});
