// import db from '../../db/models'


window.addEventListener('DOMContentLoaded', (e) => {
  const addLibrary = document.getElementById('create-library')
  
  addLibrary.addEventListener('click', () => {
    //   const libraryName = document.createElement('input')
      const submitButton = document.getElementById('add')
      const cancelButton = document.getElementById('cancel')
    //   const inputContainer = document.getElementById('input-container');
     const form = document.getElementById('library-form');
     form.classList.remove('hidden');
      submitButton.addEventListener('click', async(e) => {
          //getting value of the input the user typed in 
        //   e.preventDefault()

      })
      cancelButton.addEventListener('click', async(e) => {
        e.preventDefault();
        form.classList.add('hidden')
      })
  

  })
})

