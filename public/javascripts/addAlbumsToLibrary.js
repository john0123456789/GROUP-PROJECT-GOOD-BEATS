window.addEventListener('DOMContentLoaded', (e) => {

    const button = document.getElementById('addAlbum')
    button.addEventListener('click', async (e) => {
        // e.preventDefault()
        const libraryId = document.getElementById('libraryName').value
        const albumId = document.getElementById('albumId').value
        const res = await fetch(`/libraries/${libraryId}/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                libraryId,
                albumId
            })
        })
        // const data = await res.json()


    })


})
