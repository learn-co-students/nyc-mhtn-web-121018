class Api::V1::BeveragesController < ApplicationController

  def index #localhost:3000/api/v1/beverages
    # model
    @bevs = Beverage.all
    # RESPONSE
    render json: @bevs, status: :ok
  end

  def show #localhost:3000/api/v1/beverages/:id
    # model
    @bev = Beverage.find(params[:id])
    # RESPONSE
    render json: @bev, status: :ok
  end

  def create # POST localhost:3000/api/v1/beverages

    # model
    @bev = Beverage.create(bev_params)
    # RESPONSE
    render json: @bev, status: :ok
  end

  private

  def bev_params
    params.require(:beverage).permit(:name,:fun,:fizzy,:size)
  end

end # end controller

# fetch('http://localhost:3000/api/v1/beverages', {
#   method: "POST",
#   headers: {
#     "Content-Type": "application/json",
#     "Accept": "application/json"
#   },
#   body: JSON.stringify({
#     name: "Moxy",
#     fizzy: true,
#     fun: true,
#     size: 9
#     })
#   })
