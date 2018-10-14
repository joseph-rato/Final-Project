export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, product) => {
  return {
    type: OPEN_MODAL,
    modal,
    product
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
