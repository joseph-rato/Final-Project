export const createReview = (review) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${review.user_id}/reviews`,
        data: review
    })
}

// need to make these on the backend before i do anything else
export const deleteReview = (data) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/users/${data.user_id}/reviews/${review_id}`
    })
}

export const updateReview = (review) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${review.user_id}/reviews/${review.review_id}`,
        data: review
    })
}