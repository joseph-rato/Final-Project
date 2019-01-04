export const fetchUsersProductsByName = (query) => {
    return(
        $.ajax({
            method: 'GET',
            url: 'api/products/search',
            data: query
        })
    )
}