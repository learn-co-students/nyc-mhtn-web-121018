class ChildrenController < ApplicationController
  # you will write your controller code here
  # RESTful Routes # 7
  # CRUD
  # HTTP Verbs => GET, POST, PATCH/PUT, DELETE

  # Controller Actions <= actionssssssss

  # index => showed everything
  # get '/children' <= sinatra way
  def index
    # do the stuff here
    puts "do i really end uyp here?"

    # omg our model
    @children = Child.all

    # response (erb, view)
    # erb :"children/index"
    # render(:index)
    # will render the file with that name,
    # it will look for it in a folder based on the controller name
    # but because we follow the same pattern of conventions,
    # if you don't render, it will just look for it using those rules automatically

    # dont touch that!v too powerful!!!
  end

  # show => 1 thing
  def show
    byebug
  end

  # create => new, save
  # new => getting that form
  def new
  end

  # create => post here
  def create
  end

  # edit
  def edit
  end

  # update
  def update
  end
  #
  # # delete => destroy
  # def destroy
  # end

  def deactivate
  end
end
