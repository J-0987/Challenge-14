const loginFormHandler = async (event) => {
  // Prevents the default action of the form from happening
  event.preventDefault();

  // Grabs the values from the email and password from the form and trims any whitespace
  const email = document.querySelector('#usernameLogin').value.trim();
  const password = document.querySelector('#passwordLogin').value.trim();

  if (email && password) {
      // TODO: Add a comment describing the functionality of this expression
      // Sends a POST request to the server with the email and password
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
          document.location.replace('/post');
      } else {
          alert('Failed to log in');
      }
  }
};

const signUpHandler = async (event) => {
  // Prevents the default action of the form from happening
  event.preventDefault();

  // Grabs the values from the email and password from the form and trims any whitespace
  const email = document.querySelector('#usernameSignup').value.trim();
  const password = document.querySelector('#passwordSignup').value.trim();
  console.log(email,password)
  if (email && password) {
      // Sends a POST request to the server with the email and password
      const response = await fetch('/api/users/', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
          document.location.replace('/post');
      } else {
          alert('Failed to sign up');
      }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signUpHandler);


  console.log("LOGIN JS")