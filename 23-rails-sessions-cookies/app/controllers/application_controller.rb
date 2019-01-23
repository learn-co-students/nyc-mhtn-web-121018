class ApplicationController < ActionController::Base
  # let's clean this up,
  # goes here because maybe in the future, more than
  # one controller wants to setup the cart
  def create_cart
    # [] {}
    # k:v => cookie
      # session is kept inside the cookie
    # what to store here?
      # items in the cart = instances
        # don't store the instance => too much data
        # the cookie has a size limitation = 4kb => think about mobile development
      # the item id = number
    if !session[:cart]
      session[:cart] = []
    end
    # session[:cart] << id
  end

  def add_to_cart(item_id)
    session[:cart] << item_id
  end
end
