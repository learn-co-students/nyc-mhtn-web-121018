Rails.application.routes.draw do
  resources :users, only: [:show, :new, :create]
  # get '/signup', to: "users#new", as: "signup_page"

  # to get the login form
  get '/login', to: "sessions#login", as: "login" # does this match REST? where does this go?
  # we need to create a session saying we are logged in
  post '/sessions', to: "sessions#create"



  # sessions
  # why sessions?
     # informtion about client, specific to that user
     # shoved into a cookie
     # statefulness => HTTP stateless
     # when a user logs in, conceptually, they are the ones that care that they are logged in
     # if you cannot maintain your own state (that you are authenticated)
     # every request, you must reauthenticate
  # sessions controller, but no model
    # session in English = period of time
    # logout

     # IP
     # HTTP
     # TCP - this is for maintaining state when routing the request to the destination
     #  DNS Servers

end
