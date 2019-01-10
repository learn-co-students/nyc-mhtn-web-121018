class StudentsController < ApplicationController

  get '/students' do
    @students = Student.all #define instance variable for view
    erb :'students/index' #show all students view (index)
  end

  get '/students/new' do
    # what do I need from the model?
    # not go to the model yet?
    @teachers = Teacher.all

    # how do i respond? (view)
    erb :'students/new' #show new students view
  end

  get '/students/:id' do
    #gets params from url
    @student = Student.find(params[:id]) #define instance variable for view

    erb :'students/show' #show single student view
  end

  post '/students' do
    binding.pry
    # model
    # take the form data
    @student = Student.create(params)
    # create a new student

    # response
    # show them the new student somehow
    redirect "/students/#{@student.id}"
    # redirect "https://google.com/search?q=#{@student.name}"
  end

  get '/students/:id/edit' do
    #get params from url
    @student = Student.find(params[:id]) #define intstance variable for view
    @teachers = Teacher.all

    erb :'students/edit' #show edit student view
  end

  patch '/students/:id' do
    # binding.pry
    #get params from url
    @student = Student.find(params[:id]) #define variable to edit
    @student.update(params[:students])
    # strong params => mass assignment

    # response
    redirect "/students/#{@student.id}"
  end

  # One place of abstraction
  # def show_path(student)
end
