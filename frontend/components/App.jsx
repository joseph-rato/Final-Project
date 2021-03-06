import React from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import PlaceHolderContainer from './place_holder_container'
import Modal from './modal';
import ProductsContainer from './products/products_container'
import CreateProductContainer from './products/create_product_container'
import ProductShowContainer from './products/product_show_container'
import MainPage from './main_page'

const App = () => (
  <div className="first-div">
    <div className="second-div">
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>



  </div>
)

export default App;
