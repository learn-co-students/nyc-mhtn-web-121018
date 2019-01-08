class ResolutionsController < ApplicationController # Sinatra::Base
  #        Model => models, active record stuff
  # MVC => Controller => App file
  #        View => terminal, CLI, those puts statements => erb

  # CRUD              => RESTful Route            => HTTP Verb (method) : PATH
  # Read                 View All,
  # =>                   Index                       GET /resolutions
  # =>                   Viewing One
  # =>                   Show

  # Create               GET To be able to use POST
  # =>                   GET to see a form
  # =>                   POST to create the thing

  # Update
  # =>                   GET a form for updating something
  # =>                   PATCH/PUT actually updating the thing
  # Destroy/Delete       Delting the thing

  # at least three because of project requirements
  get '/resolutions' do
    # to ferry between the models and the views
    # models
    @resolutions = Resolution.all

    # views
    erb :"resolution/index"
  end

  # you can name these routes anything you want
  get '/resolutions/new' do
    # model
    # view
    erb :"resolution/new"
  end

  get '/resolutions/:id' do
    # model
    @resolution = Resolution.find(params["id"])

    #view
    erb :"resolution/show"
  end

  post '/resolutions' do
    # model
    # Resolution.create(goal: params["goal"], deadline: params["deadline"], accomplished: params["accomplished"])
    # Resolution.create({ goal: params["goal"], deadline: params["deadline"], accomplished: params["accomplished"] })
    @resolution = Resolution.create(params)
    # view
    # erb :"resolution/show"
    redirect "/resolutions/#{@resolution.id}"
  end

  get '/resolutions/:id/edit' do
    # moidel
    @resolution = Resolution.find(params["id"])

    # view
    erb :"resolution/edit"
  end

  patch '/resolutions/:id' do
    binding.pry
    @resolution = Resolution.find(params["id"])
    @resolution.update(params["resolution"]) # <= but there is that _method

    # view
    redirect "/resolutions/#{@resolution.id}"
  end
end
