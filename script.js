const emailInput = document.querySelector('.form__input');
const submitBtn = document.querySelector('.form__cta');
const errorMsg = document.querySelector('.error-msg');

const emailPattern = email => {
  // abc@email.com
  const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  return pattern.test(email.toLowerCase());
};

const validateEmailInput = () => {
  const isValid = emailPattern(emailInput.value);

  if (emailInput.value === '') {
    errorMsg.innerText = 'Whoops! It looks like you forgot to add your email';
    errorMsg.classList.add('show');
    emailInput.classList.add('error-input');
  } else {
    errorMsg.classList.remove('show');
    emailInput.classList.remove('error-input');

    if (!isValid) {
      errorMsg.innerText = 'Please provide a valid email address';
      errorMsg.classList.add('show');
      emailInput.classList.add('error-input');
    }
  }
};

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  validateEmailInput();
});
