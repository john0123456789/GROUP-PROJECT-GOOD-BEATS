const demoButton = document.getElementById('demo')
const email = document.getElementById('emailAddress');
const submitButton = document.getElementById('submitButton')
console.log(email)
demoButton.addEventListener('click', (e) => {
  email.value = 'demo@netscape.com';
})
