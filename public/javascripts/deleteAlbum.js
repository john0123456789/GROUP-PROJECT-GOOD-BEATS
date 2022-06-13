window.addEventListener('DOMContentLoaded', (e) => {
    const deleteButtons = document.getElementsByClassName('deleteButton')
    const libraryId = document.getElementById('libraryId').value
    for (let i = 0; i < deleteButtons.length; i++) {
        const button = deleteButtons[i]
        button.addEventListener('click', async (e) => {
            e.preventDefault()
            const albumId = e.target.value
            const li = document.getElementById(`library-card-${albumId}`)
            li.remove();
            button.remove()
            await fetch(`/albumlibraries/${libraryId}/${albumId}`, {
                method: "DELETE",
            })
        })
    }

})
