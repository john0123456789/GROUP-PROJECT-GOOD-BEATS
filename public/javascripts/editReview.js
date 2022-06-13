// for future if we want edit review to be dynamic (in progress)

// const editBtn = document.querySelectorAll(`.edit-btn`)

// for (let i = 0; i < editBtn.length; i++) {
//     const btn = editBtn[i];
//     btn.addEventListener('click', (e) => {
//         const reviewId = e.target.id.split('-')[2]
//         const form = document.getElementById(`edit-form-${reviewId}`)
//         // for bonus/dynamic page
//         if (form.classList.contains('hidden')) {
//             form.classList.remove('hidden')
//         } else {
//             form.classList.add('hidden')
//         }


//         const submitBtn = document.getElementById(`edit-submit-${reviewId}`)
//         submitBtn.addEventListener('click', async (submitEvent) => {
//           submitEvent.preventDefault()
//           const title = document.getElementById(`${reviewId}-edit-title`).value
//           const content = document.getElementById(`${reviewId}-edit-content`).value
//           const rating = document.getElementById(`${reviewId}-edit-rating`).value


//         //   console.log(title, content)

//           const res = await fetch(`/reviews/${reviewId}`, {
//               method: 'PUT',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify({
//                   title,
//                   content,
//                   rating
//               })
//           })

//           const data = await res.json()
//           if (data.message === 'Success!') {
//               const titleEle = document.getElementById(`review_header_${reviewId}`)
//               const contentEle = document.getElementById(`review_content_${reviewId}`)
//               const ratingEle = document.getElementById(`review_rating_${reviewId}`)
//               titleEle.innerHTML = data.review.title
//               contentEle.innerHTML = data.review.content
//               ratingEle.innerHTML = data.review.rating
//           } else {
//           }
//       })
//     })
// }
