window.addEventListener('DOMContentLoaded', (e) => {
    const edit = document.getElementById('edit');
    const cancel = document.getElementById('cancel');
    const save = document.getElementById('save');
    const form = document.getElementById('edit-library-form');
    edit.addEventListener('click', (e) => {

        form.classList.remove('hidden')
    })

    cancel.addEventListener('click', async(e) => {
        e.preventDefault();
        form.classList.add('hidden');
    })

    save.addEventListener('click', async(e) => {
        const libraryId = e.target.value
        const textField = document.getElementById('new-name').value
        console.log(textField)
        await fetch(`/libraries/${libraryId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: textField
            })
        })
    })
})