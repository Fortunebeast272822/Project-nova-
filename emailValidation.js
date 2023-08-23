// This script adds an event listener to the email input that triggers whenever the user types in the input field. 
// It checks the validity of the email using a regular expression and toggles the display of the error icon and text accordingly.

// Additionally, the script prevents form submission if the email is not valid and displays the error messages.

const emailInput = document.getElementById('email');
const emailErrorIcon = document.querySelector('.email-error-icon');
const emailErrorText = document.querySelector('.email-error-text');
const emailForm = emailInput.closest('form');

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

emailInput.addEventListener('input', () => {
  const email = emailInput.value.trim();
  
  if (validateEmail(email)) {
    emailErrorIcon.classList.add('none');
    emailErrorText.classList.add('none');
  } else {
    emailErrorIcon.classList.remove('none');
    emailErrorText.classList.remove('none');
  }
});

emailForm.addEventListener('submit', (e) => {
  const email = emailInput.value.trim();
  
  if (!validateEmail(email)) {
    e.preventDefault();
    emailErrorIcon.classList.remove('none');
    emailErrorText.classList.remove('none');
  } else {
    // If email is valid, you might also want to hide the error messages if they were shown earlier
    emailErrorIcon.classList.add('none');
    emailErrorText.classList.add('none');
  }
});