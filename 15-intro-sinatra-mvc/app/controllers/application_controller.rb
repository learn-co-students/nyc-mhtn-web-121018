class ApplicationController < Sinatra::Base
  set :views, 'app/views'
  # set :method_override, true

  # EDD => Error Driven Development
  # TODO create a route to root/home render home
  get '/' do
    # "<h1>Hello World</h1>"
    erb :homepage
  end

  # TODO all books
  # Index page for Books
  get '/books' do
    # binding.pry
    @books = Book.all
    erb :index # this restful route is called index
  end

  # TODO Individual book
  get '/books/:id' do # /books/1
    # binding.pry
    @book = Book.find(params["id"])
    erb :show
  end

  # post, patch

end
