


export const updateProduct = (user, userId) => {
  debugger
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${userId}`,
    data: user,
    contentType: false,
    processData: false
  })
}

export const fetchUser = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}`
  })
}
