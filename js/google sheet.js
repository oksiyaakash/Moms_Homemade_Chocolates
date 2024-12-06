const scriptURL = 'https://script.google.com/macros/s/AKfycbz6R5N9b8HJ_NnU0kilDCjAjLhg3x4Z4E7ED8BC1kTiZW4NZdlTQUCjDPl3wAQ3x48ClQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})