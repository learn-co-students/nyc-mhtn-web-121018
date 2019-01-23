Rails.application.routes.draw do
  resources :nachos, only: [:index, :show]
  # resources :cart, only: [:update] # supposed to be a cart id, we don't want to break REST
  patch '/add_to_cart', to: "cart#update", as: "mario_cart"
end
