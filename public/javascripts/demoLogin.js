window.addEventListener('DOMContentLoaded', (e) => {
  const demoButton = document.getElementById('demo')
  const email = document.getElementById('emailAddress');
  const password = document.getElementById('password');
  if (demoButton) {
  demoButton.addEventListener('click', (e) => {
    email.value = 'demo@netscape.com';
    password.value = '123';
    })
  }
})
