YaHoPicaso::Application.routes.draw do

  devise_for :users

  root :to => "users#index"

  resources :users
  resources :attaches
  resources :comments
  resources :likes



end

