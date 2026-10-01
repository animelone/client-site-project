
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      alert("Please complete all required fields.");
      return;
    }

    alert(
      `Thank you, ${name}! Your form passed validation. ` +
      "This demo does not send your message yet."
    );

    contactForm.reset();
  });
}