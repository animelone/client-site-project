

const contactForm = document.querySelector(".contact-form");

// console.log("Contact script loaded");


if (contactForm) {

  const nameInput = contactForm.querySelector("#name");
  const emailInput = contactForm.querySelector("#email");
  const messageInput = contactForm.querySelector("#message");

  const fields = [
    {
      input: nameInput,
      error: contactForm.querySelector("#name-error"),
      message: "Name must contain at least 2 characters."
    },
    {
      input: emailInput,
      error: contactForm.querySelector("#email-error"),
      message: "Please enter a valid email address."
    },
    {
      input: messageInput,
      error: contactForm.querySelector("#message-error"),
      message: "Message must contain at least 10 characters."
    }
  ];

  function validateField(field) {
    const { input, error, message } = field;

    if (!input.checkValidity()) {
      if (input.validity.valueMissing) {
        error.textContent = "This field is required.";
      } else {
        error.textContent = message;
      }

      input.setAttribute("aria-invalid", "true");
      return false;
    }

    error.textContent = "";
    input.setAttribute("aria-invalid", "false");

    return true;
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // console.log("Submit handler is running");
    let formIsValid = true;

    fields.forEach(function (field) {
      if (!validateField(field)) {
        formIsValid = false;
      }
    });

    if (!formIsValid) {
      event.preventDefault();
    }
  });

  fields.forEach(function (field) {
    field.input.addEventListener("input", function () {
      validateField(field);
    });
  });
}