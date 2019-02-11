json.extract! burger, :id, :toppings, :meat, :seed, :created_at, :updated_at
json.url burger_url(burger, format: :json)
