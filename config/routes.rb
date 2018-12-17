Rails.application.routes.draw do
  # namespace :api do
  #   get 'product_discussions/create'
  #   get 'product_discussions/show'
  #   get 'product_discussions/update'
  #   get 'product_discussions/destroy'
  # end
  # get 'create/show'
  # get 'create/destroy'
  # get 'create/update'
  # namespace :api do
  #   get 'reviews/create'
  #   get 'reviews/show'
  #   get 'reviews/index'
  # end
  # namespace :api do
  #   get 'products/index'
  #   get 'products/show'
  #   get 'products/create'
  #   get 'products/update'
  # end
  # namespace :api do
  #   get 'session/create'
  #   get 'session/destroy'
  # end
  # namespace :api do
  #   get 'users/create'
  # end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:show, :create] do
      resources :products, only: [:create, :update]
      resources :reviews, only: [:show, :create, :destroy, :update]
      resources :product_discussions, only:[:create, :update, :destroy, :show]
    end
    
    get 'products/search', to: 'products#search'

    resource :sessions, only: [:create, :destroy, :show]

    resources :products, only: [:index, :show] do
      resources :reviews, only: [:index]
    end
    
  end


end
