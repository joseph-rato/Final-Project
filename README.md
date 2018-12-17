# README

## Description
This app allows to post products read reviews and create users. It's meant to share cool new products you've found and then watch them escape from obscurity.

## Live site
[Product-esc](http://product-esc.herokuapp.com)

## Technologies Used
This app was built on rails, with postgresql as the database and React for the frontend. The outside technology used was active storage for storage of images.


## Code
Two features I'm very proud of are the modals I've implemented and getting active storage to work. The sign up and sign in modals were pretty basic, however the product show modal needed data when it rendered to properly render and then get additional information to see the reviews at the bottom of the page. The key was to pass in an additional argument to the modal so that not only would it know which modal component to mount it would also have initial data for setup.


```JavaScript
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'product':
      component = <ProductShowContainer product={product} />;
      break;
    default:
      return null;
  }

const mapStateToProps = state => {
  return {
    modal: state.ui.modal.modalType,
    product: state.ui.modal.product
  };
};

```
I'm very proud of the way I was able to get my user reducer to work. I wanted to only add users to my user entities state and it took me a while to figure out the way i did it. I iterated through an array to properly merge each user to their information pulled.

```JavaScript
case RECEIVE_CURRENT_USER:

  return merge({}, state, {[action.currentUser.id]: action.currentUser})
case RECEIVE_PRODUCT:

  let finalState = Object.assign({}, state)
  const userArr = Object.values(action.product.users)
  for (let i = 0; i < userArr.length; i++) {
    finalState = merge({}, finalState, {[userArr[i].id]: userArr[i]});
  }
```
### Future Changes
Future directions for this project:
* Product Discussion
* User update form
* Search Bar
* Likes, Tags, and Collections
