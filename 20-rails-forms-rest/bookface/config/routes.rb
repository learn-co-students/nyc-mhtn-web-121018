Rails.application.routes.draw do
  # resources :users, only: [:index, :new]
  # yes, you can limit it - you don't want people to hit the action if you haven't built it

  # YES YOU CAN!!!
  # resources :users, except: :new

  resources :users

  # All 7 RESTful Routes
  # # index
  # get '/users', to: "users#index"
  #
  # # Ordering problem
  # # show
  # get '/users/:id', to: "users#show" #, as: "showy" # that's annoying, but that's why reources is nice
  #
  # # new
  # get '/users/new', to: "users#new"
  #
  # # create
  # post '/users', to: "users#create"
  #
  # # edit
  # get '/users/:id/edit', to: "users#edit"
  #
  # # update
  # patch '/users/:id', to: "users#update"
  #
  # # destroy
  # delete '/users/:id', to: "users#delete"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
