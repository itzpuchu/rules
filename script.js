// Login form
function login(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  alert(`Login attempt: ${email}`);
}
