window.addEventListener('DOMContentLoaded', (e) => {
    const deleteButtons = document.getElementsByClassName('deleteButton')
    const libraryId = document.getElementById('libraryId').value
    for (let i = 0; i < deleteButtons.length; i++) {
        const button = deleteButtons[i]
        button.addEventListener('click', async (e) => {
            const albumId = e.target.value
            e.preventDefault()
            return await fetch(`/albumlibraries/${libraryId}/${albumId}`, {
                method: "DELETE",
            })
        })
    }

})
