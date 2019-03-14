class Api::V1::BotsController < ApplicationController
  def toggle_sale
    bot = Bot.find(params[:id])

    bot.update(for_sale: !bot.for_sale)

    render json: bot
  end

  def index
    bots = Bot.where(for_sale: true)

    render json: bots
  end

  def purchase
    bot = Bot.find(params[:id])

    new_balance = curr_user.balance-bot.price

    if new_balance >= 0 && bot.owner.id != curr_user.id
      curr_user.update(balance: new_balance)

      bot.update(for_sale: false, owner: curr_user)
      
      render json: {bot: BotSerializer.new(bot), user: UserSerializer.new(curr_user)}
    else
      render json: {errors: "You can't buy this!"}
    end
  end
end