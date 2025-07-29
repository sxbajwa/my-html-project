// Simple script for confirmation popup on contact section
document.addEventListener("DOMContentLoaded", function () {
  const email = document.querySelector(".contact-item p");

  email.addEventListener("click", function () {
    alert("You can contact us via email: " + email.textContent);
  });
});
