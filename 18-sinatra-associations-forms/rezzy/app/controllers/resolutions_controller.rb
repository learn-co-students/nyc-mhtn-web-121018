class ResolutionsController < ApplicationController # Sinatra::Base
  get '/resolutions' do
    # model
    @resolutions = Resolution.all

    # views
    erb :"resolution/index"
  end

  get '/resolutionzzzzzzzzzzzzz' do
    # model
    @resolutions = Resolution.all

    # views
    erb :"resolution/index"
  end

  get '/resolutions/new' do
    # model
    # view
    erb :"resolution/new"
  end

  get '/resolutions/:id' do
    # model
    @resolution = Resolution.find(params["id"])
    binding.pry
    #view
    erb :"resolution/show"
  end

  post '/resolutions/create' do
    # model
    @resolution = Resolution.create(params)
    binding.pry
    # view
    # erb :"resolution/show"
    redirect "/resolutions/#{@resolution.id}"
  end

  get '/resolutions/:id/edit' do
    # model
    @resolution = Resolution.find(params["id"])

    # view
    erb :"resolution/edit"
  end

  patch '/resolutions/:id' do
    # model
    @resolution = Resolution.find(params["id"])
    @resolution.update(params["resolution"]) # <= but there is that _method

    # view
    redirect "/resolutions/#{@resolution.id}"
  end

  delete '/delete' do

  end
end
