export const createProductDiscussion = (product_discussion) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${product_discussion.user_id}/product_discussions`,
        data: product_discussion
    })
}

// need to make these on the backend before i do anything else
export const deleteProductDiscussion = (product_discussion) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/users/${product_discussion.user_id}/product_discussions/${product_discussion.id}`
    })
}

export const updateProductDiscussion = (product_discussion) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${product_discussion.user_id}/product_discussions/${product_discussion.id}`,
        data: product_discussion
    })
}