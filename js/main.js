(function () {
  'use strict';

  // Form elements
  var form = document.querySelector('.search');
  var input = document.getElementById('destination');
  var error = document.getElementById('destination-error');


  // Check the search field
  function validate() {
    var value = input.value.trim();
    var message = '';

    if (value === '') {
      message = 'Please enter a destination.';
    } else if (value.length < 3) {
      message = 'Destination must be at least 3 characters.';
    } else if (!/^[A-Za-zÀ-ÿ\s,.'\-]+$/.test(value)) {
      message = 'Use letters only (no numbers or symbols).';
    }

    error.textContent = message;
    error.hidden = message === '';
    input.classList.toggle('is-invalid', message !== '');
    input.setAttribute('aria-invalid', message !== '' ? 'true' : 'false');
    return message === '';
  }


  // Validate on submit
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validate()) {
      error.hidden = false;
      error.textContent = 'Searching for "' + input.value.trim() + '"…';
    } else {
      input.focus();
    }
  });


  // Re-check while typing after an error
  input.addEventListener('input', function () {
    if (input.classList.contains('is-invalid')) { validate(); }
  });
})();
