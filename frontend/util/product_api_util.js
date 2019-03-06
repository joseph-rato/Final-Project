export const createProduct = (product, id) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `/api/users/${id}/products`,
    data:  product,
    contentType: false,
    processData: false
  })
}

export const fetchProducts = () => {
  return $.ajax({
    method: "GET",
    url: "/api/products"
  })
}

export const fetchProduct = (product) => {
  return $.ajax({
    method: "GET",
    url: `/api/products/${product.id}`
  })
}

export const updateProduct = (product, id) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${id}/products/${product.id}`,
    data: {product},
    contentType: false,
    processData: false,
  })
}
