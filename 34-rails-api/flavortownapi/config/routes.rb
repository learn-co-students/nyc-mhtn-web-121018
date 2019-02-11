Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get 'api/v1/beverages' to: "api/v1/beverages"
  namespace :api do
    namespace :v1 do
      resources :beverages
    end
  end
end
