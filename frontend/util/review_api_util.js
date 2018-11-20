export const createReview = (review) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${review.user_id}/reviews`,
        data: review
    })
}

// need to make these on the backend before i do anything else
export const deleteReview = (review) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/users/${review.user_id}/reviews/${review.id}`
    })
}

export const updateReview = (review) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${review.user_id}/reviews/${review.id}`,
        data: review
    })
}