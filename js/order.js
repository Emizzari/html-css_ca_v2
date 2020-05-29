// Form
const form = document.querySelector(".main__section__form--order");

// First Name
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
let firstNameHasError = false;

// Last Name
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
let lastNameHasError = false;

// Email
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
let emailHasError = false;



// Feedback
const submitMessage = document.querySelector("#submitMessage");

// Eventlistner
form.addEventListener("submit", validateForm);



// Function to validate the contact form
function validateForm() {
    event.preventDefault();

    // First name:
    const firstNameValue = firstName.value;

    if (validateLength(firstNameValue, 1) === true) {
        firstNameError.style.display = "none";
        firstNameHasError = false;
    } else {
        firstNameError.style.display = "block";
        firstNameHasError = true;
    }

    // Last name:
    const lastNameValue = lastName.value;

    if (validateLength(lastNameValue, 1) === true) {
        lastNameError.style.display = "none";
        lastNameHasError = false;
    } else {
        lastNameError.style.display = "block";
        lastNameHasError = true;
    }

    // Email:
    const emailValue = email.value;

    if (validateEmail(emailValue) === true) {
        emailError.style.display = "none";
        emailHasError = false;
    } else {
        emailError.style.display = "block";
        emailHasError = true;
    }

    // Submitt Message:
    if (firstNameHasError === true ||
        lastNameHasError === true ||
        emailHasError === true)
        {
        submitMessage.style.display = "none";
    } else {
        submitMessage.style.display = "block";
    }
}

// Validate the lenght
function validateLength(value, lenghtToCheck) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= lenghtToCheck) {
        return true;
    } else {
        return false;
    }
}

// Validate email address
function validateEmail(emailValue) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(emailValue)) {
        return true;
    } else {
        return false;
    }
}