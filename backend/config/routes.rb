Rails.application.routes.draw do
  resources :houses
  resources :users
  resources :sessions, only: [:home, :create, :new]

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
