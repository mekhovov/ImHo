ImHo::Application.routes.draw do

  devise_for :users

  root :to => "users#index"

  resources :users
  resources :attaches
  resources :comments
  resources :likes

  match "/attaches/raw" => "attaches#raw", :as => :raw
  match "/guide" => "users#guide"

end
