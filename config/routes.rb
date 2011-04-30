YaHoPicaso::Application.routes.draw do

  devise_for :users

  root :to => "users#index"

  resources :users
  resources :attaches
  resources :comments
  resources :likes

  scope "admin" do
    resources :users, :path => "users"
  end

end

