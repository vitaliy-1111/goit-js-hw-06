const form = document.querySelector('form.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === '' || password === '') {
    alert('All fields must be filled');
    return;
  }

  const DataForm = {
    email,
    password
  }
  console.log(DataForm);
  event.currentTarget.reset();

}

// function onFormSubmit(event) {
//   event.preventDefault();
//  const formData = new FormData(event.currentTarget);
  
//   formData.forEach((value, name) => {
//     if (value === '') {
//       alert('All fields must be filled');
//       return;
//     }
//     console.log( name, value);
//   });
// }