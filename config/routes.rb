YaHoPicaso::Application.routes.draw do

  devise_for :users#, :controllers => {:registrations => "registrations"}

  root :to => "users#index"

  resources :users
  resources :attaches
  resources :comments

end
