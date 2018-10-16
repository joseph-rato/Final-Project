import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const ERRORS_PRODUCTS = 'ERRORS_PRODUCTS';

export const receiveProduct = (product) => {
  return({
    type: RECEIVE_PRODUCT,
    product
  })
}

export const receiveProducts = (products) => {
  return({
    type: RECEIVE_PRODUCTS,
    products
  })
}

export const receiveProductErrors = (errors) => {
  return({
    type: ERRORS_PRODUCTS,
    errors
  })
}


export const fetchProduct = (product) => dispatch => {
  return APIUtil.fetchProduct(product).then( (serverProduct) => dispatch(receiveProduct(serverProduct)),
  (err) => dispatch(receiveProductErrors(err)));
};

export const fetchProducts = () => dispatch => {
  return APIUtil.fetchProducts().then( (serverProducts) => dispatch(receiveProducts(serverProducts)),
  (err) => dispatch(receiveProductErrors(err)));
};

export const createProduct = (product) => dispatch => {
  return APIUtil.createProduct(product).then( serverProduct => dispatch(receiveProduct(serverProduct)),
  (err) => dispatch(receiveProductErrors(err)));
};

export const updateProduct = (product) => dispatch => {
  return APIUtil.updateProduct(product).then( (serverProduct) => dispatch(receiveProduct(serverProduct)),
  (err) => dispatch(receiveProductErrors(err)));
};
