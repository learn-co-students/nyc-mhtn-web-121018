class DogsController < ApplicationController
  # get '/dogs/:id'
  def show
    # model
    @dog = Dog.find(params[:id])
    # response
  end

  # why did my errors disappear?
  # the idea of request response
  # but now... solve it!
  def new
    # model
    # technically no... but we have form_for
    # byebug
    # bang bang!!
    # takes any value in Ruby (any language)
    # the first one flips it => nil is a falsy value, so ! once turns it true
    # the second bang flips it again => true becomes false == nil's "truthy" value
    if !!flash[:data]
      @dog = Dog.new(flash[:data])
    else
      @dog = Dog.new
    end


    # 1. use flash to carry over the data
    # 2. fill in @dog with this data
    # 3. now that @dog has the data BUT no id,
    # it is still a new form but it will fill in your values

    # response
  end

  # post '/dogs'
  def create
    # no one trusts me anymore
    # model
    # byebug
    @dog = Dog.new(dog_params)
    @dog.clean = false
    # @dog.save

    # 1. it failed... what to do about the failure?
    if @dog.valid?
      @dog.save # this can fail for other reasons... so maybe check in here as well
      puts "did we hit this?"
      # byebug
      flash[:success] = "Nice! Saved! Signed up!"
      redirect_to @dog # dog_path(@dog)
    else
      # let's go back to the form if it failed
      # and tell them why!!
      # problem 1: url is whacky
      puts "or this?"
      # byebug # I didn't screw up... where did my errors go?
      @errors = @dog.errors.full_messages
      # byebug
      flash[:errors] = @errors
      flash[:data] = dog_params
      # render :new
      redirect_to new_dog_path
    end

    # 2. it then sent me to index... i have no index... i don't want an index... what to do?
    # response

  end

  private

  # strong params!!!!!
  def dog_params
    params.require(:dog).permit(:name, :breed, :cuteness_level, :size)
  end
end
