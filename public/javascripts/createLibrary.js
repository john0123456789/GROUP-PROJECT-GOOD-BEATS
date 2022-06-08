// import db from '../../db/models'


window.addEventListener('DOMContentLoaded', (e) => {
  const addLibrary = document.getElementsByClassName('create-library')[0]
  
  addLibrary.addEventListener('click', () => {
      const libraryName = document.createElement('input')
      const submitButton = document.createElement('button')
      const cancelButton = document.createElement('button')
      const inputContainer = document.getElementById('input-container');
      cancelButton.innerText = 'Cancel';
      submitButton.innerText = 'Add'
      submitButton.addEventListener('click', async(e) => {
          //getting value of the input the user typed in 
        
        const name = libraryName.value;
        const userId = document.getElementsByClassName('hidden')[0].value;
        console.log(userId)
         //creating a library with the name from above
        // await db.Library.create({
        //     name,
        //     userId
        // })

      })
      cancelButton.addEventListener('click', () => {
        inputContainer.removeChild(submitButton)
        inputContainer.removeChild(libraryName)
        inputContainer.removeChild(cancelButton)
      })
      if(inputContainer.childNodes.length < 2){
          inputContainer.appendChild(libraryName)
          inputContainer.appendChild(submitButton)
          inputContainer.appendChild(cancelButton)

      }


  })
})

