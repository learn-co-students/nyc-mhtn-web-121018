class NachosController < ApplicationController
  before_action :find_nacho, only: :show
  # to aid in the reuse of that shared method
  before_action :create_cart, only: [:index, :show]

  # 1. keep track of the cart somehow
  # make an array that's attached to the cookie
  # or maybe a hash
  # 2. make the route to do it
  # the add cart button should be the one to add to the session
  # post for nachos
    # post => updating => patch
    # nachos?

  def index
    # byebug
    @nachos = Nacho.all
  end

  def show
    render :show
  end

  private

  def find_nacho
    @nacho = Nacho.find(params[:id])
  end
end
