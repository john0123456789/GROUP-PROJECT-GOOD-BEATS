// import db from '../../db/models'


window.addEventListener('DOMContentLoaded', (e) => {
  const addLibrary = document.getElementById('create-library')
  
  addLibrary.addEventListener('click', () => {
    //   const libraryName = document.createElement('input')
      const cancelButton = document.getElementById('cancel')
      addLibrary.classList.add("hidden")
    //   const inputContainer = document.getElementById('input-container');
     const form = document.getElementById('library-form');
     form.classList.remove('hidden');
      cancelButton.addEventListener('click', async(e) => {
        e.preventDefault();
        form.classList.add('hidden')
        addLibrary.classList.remove('hidden')
      })
  

  })
})

