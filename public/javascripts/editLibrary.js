window.addEventListener('DOMContentLoaded', (e) => {
    const edit = document.getElementById('edit');
    const cancel = document.getElementById('cancel');
    const save = document.getElementById('save');
    const form = document.getElementById('edit-library-form');
    const deleteButton = document.getElementById('delete')

    deleteButton.addEventListener('click', async (e) => {
        const titlePage = document.getElementById('titlelib')
        // e.preventDefault()
        const libraryId = e.target.value
        const res = await fetch(`/libraries/${libraryId}`, {
            method: 'DELETE',
        })
        titlePage.remove()

    })



    edit.addEventListener('click', (e) => {
        form.classList.remove('hidden')
    })

    cancel.addEventListener('click', async (e) => {
        e.preventDefault();
        form.classList.add('hidden');
    })

    save.addEventListener('click', async (e) => {
        e.preventDefault();
        const libraryId = e.target.value
        const name = document.getElementById('new-name').value
        const res = await fetch(`/libraries/${libraryId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name
            })
        })
        const data = await res.json()
        if (data.message === 'Success!') {
            const userId = document.getElementById('idGrabber').value
            const titleEle = document.getElementById(`heading`)
            titleEle.innerHTML = `${userId}'s ${data.library.name} Library`
            form.classList.add('hidden')
        }
    })
})
