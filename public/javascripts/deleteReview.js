window.addEventListener('DOMContentLoaded', (e) => {
const deleteBtn = document.querySelectorAll(`.delete-btn`)

for (let i = 0; i < deleteBtn.length; i++) {
    const btn = deleteBtn[i];

btn.addEventListener('click', async(e) => {
    // e.preventDefault()
    const reviewId = e.target.id.split('-')[2]
    console.log(reviewId)
    const res = await fetch(`/reviews/${reviewId}`, {
        method: 'DELETE'
    })
    const data = await res.json()
    if (data.message = "Success!") {
    const container = document.getElementById(`each-review-container-${reviewId}`)
    container.remove()
    } else {
        // errors
    }
    })
  }
})
