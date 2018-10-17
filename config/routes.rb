Rails.application.routes.draw do
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
  namespace :api, default: {format: :json} do
    resources :users, only: [:show, :create] do
      resources :products, only: [:create, :update]
      resources :reviews, only: [:show, :create, :destroy]
    end
    resource :sessions, only: [:create, :destroy, :show]
    resources :products, only: [:index, :show] do
      resources :reviews, only: [:index]
    end
  end


end
