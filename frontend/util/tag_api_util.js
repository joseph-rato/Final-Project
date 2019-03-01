export const createTags = (tag, id, product_id) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${id}/products/${product_id}/tags`,
        data:  tag,

    })
}

export const fetchTags = () => {
    return $.ajax({
        method: "GET",
        url: "/api/tags"
    })
}