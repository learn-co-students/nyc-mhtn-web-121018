Rails.application.routes.draw do
  resources :users, only: [:show, :new, :create]
  # get '/signup', to: "users#new", as: "signup_page"
  # get '/login', to: "" # does this match REST? where does this go?
end
