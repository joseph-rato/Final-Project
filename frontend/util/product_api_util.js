export const createProduct = (product) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users/:user_id/products',
    data: { product }
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

export const updateProduct = (product) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/:user_id/products/${product.id}`,
    data: {product}
  })
}
