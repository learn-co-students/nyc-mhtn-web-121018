class CartController < ApplicationController
  def update
    add_to_cart(params[:item_id])
    flash[:message] = Nacho.find(params[:item_id]).name
    redirect_to nachos_path
  end
end
