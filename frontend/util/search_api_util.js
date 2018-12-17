export const fetchUsersProductsByName = (query) => {
    debugger
    return(
        $.ajax({
            method: 'GET',
            url: 'api/products/search',
            data: query
        })
    )
}