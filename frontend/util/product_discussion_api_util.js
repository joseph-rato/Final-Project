export const createProductDiscussion = (review) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${review.user_id}/reviews`,
        data: review
    })
}

// need to make these on the backend before i do anything else
export const deleteProductDiscussion = (review) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/users/${review.user_id}/reviews/${review.id}`
    })
}

export const updateProductDiscussion = (review) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${review.user_id}/reviews/${review.id}`,
        data: review
    })
}