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
import UserProfileContainer  from './users/user_profile_container'
import UserUpdateFormContainer from './users/user_update_form_container'



const MainPage = () => (
  <div className="all-content">
    <Modal />
    <div className="navbar-top-white">
      <header className="header">
        <Route path="/" component={NavBarContainer} />
      </header>
    </div>
    <div className="grey-background">
      <Switch>
        <Route exact path="/notdoneyet" component={PlaceHolderContainer} />
        <Route exact path="/" component={ProductsContainer} />
        <Route path="/user" component={UserProfileContainer} />
        <ProtectedRoute exact path="/contribute" component={CreateProductContainer} />
        <ProtectedRoute exact path="/my/settings/edit" component={UserUpdateFormContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  </div>
)


export default MainPage;
