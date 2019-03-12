export const createTag = (tag, id, product_id) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${id}/products/${product_id}/tags`,
        data:  tag,

    })
}

export const fetchTags = (tag) => {
    return $.ajax({
        method: "GET",
        url: "/api/tags",
        data: {tags: tag}
    })
}