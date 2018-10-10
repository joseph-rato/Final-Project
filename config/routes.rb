Rails.application.routes.draw do
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
    resources :users, only: [:create]
    resource :sessions, only: [:create, :destroy, :show]
  end
end
