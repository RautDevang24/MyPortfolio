document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    document.getElementById("contact-form").reset();
  });

document.addEventListener("DOMContentLoaded", function () {
  const skills = [
    { element: document.querySelectorAll(".outer")[0], value: 90 },
    { element: document.querySelectorAll(".outer")[1], value: 85 },
    { element: document.querySelectorAll(".outer")[2], value: 80 },
    { element: document.querySelectorAll(".outer")[3], value: 95 },
    { element: document.querySelectorAll(".outer")[4], value: 85 },
    { element: document.querySelectorAll(".outer")[5], value: 65 },
  ];

  skills.forEach((skill) => {
    let degree = (skill.value / 100) * 360;
    skill.element.style.background = `conic-gradient(#4CAF50 ${degree}deg, #ddd ${degree}deg)`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const projectThumbnails = document.querySelectorAll(".project-thumbnail");

  projectThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const modal = document.createElement("div");
      modal.classList.add("lightbox");
      modal.innerHTML = `
              <div class="lightbox-content">
                  <img src="${this.src}" alt="Project Image">
                  <span class="close-lightbox">&times;</span>
              </div>
          `;

      document.body.appendChild(modal);

      document
        .querySelector(".close-lightbox")
        .addEventListener("click", function () {
          modal.remove();
        });
    });
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields before submitting.");
      return;
    }

    alert("Message sent successfully! I'll get back to you soon.");
    this.reset(); // Clears the form after submission
  });
