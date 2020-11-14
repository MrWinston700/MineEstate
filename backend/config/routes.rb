Rails.application.routes.draw do
  resources :houses, only: [:create, :destroy]
  resources :users
  resources :sessions, only: [:home, :create, :new, :destroy]
  get '/logout' => 'sessions#destroy'

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
