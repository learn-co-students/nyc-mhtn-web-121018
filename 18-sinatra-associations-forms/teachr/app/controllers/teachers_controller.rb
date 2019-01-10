class TeachersController < ApplicationController

  get '/teachers' do
    @teachers = Teacher.all #define instance variable for view
    erb :'teachers/index' #show all teachers view (index)
  end

  get '/teachers/new' do
    # what do I need from the model?
    # not go to the model yet?

    # how do i respond? (view)
    erb :'teachers/new' #show new teachers view
  end

  get '/teachers/:id' do
    #gets params from url
    @teacher = Teacher.find(params[:id]) #define instance variable for view

    erb :'teachers/show' #show single teacher view
  end

  post '/teachers' do
    # model
    # take the form data
    @teacher = Teacher.create(params)
    # create a new teacher

    # response
    # show them the new teacher somehow
    redirect "/teachers/#{@teacher.id}"
    # redirect "https://google.com/search?q=#{@teacher.name}"
  end

  get '/teachers/:id/edit' do
    #get params from url
    @teacher = Teacher.find(params[:id]) #define intstance variable for view

    erb :'teachers/edit' #show edit teacher view
  end

  patch '/teachers/:id' do
    # binding.pry
    #get params from url
    @teacher = Teacher.find(params[:id]) #define variable to edit
    @teacher.update(params[:teachers])

    # response
    redirect "/teachers/#{@teacher.id}"
  end

  # One place of abstraction
  # def show_path(teacher)
end
