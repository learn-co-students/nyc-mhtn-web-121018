Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # where you define the routes to your controller actions
  # route => path where to go, what action to execute
  get '/children', to: "children#index"
  get '/childrenzzzzzzz', to: "children#index"
  get '/children/:id', to: "children#show"
end
