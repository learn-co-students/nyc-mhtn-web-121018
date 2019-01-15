class PostsController < ApplicationController
  before_action :find_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = Post.all
  end

  def show
  end

  def new
    # @users = User.all.select do |user| !user.disable end
    # Facebook doesn't delete.
    @post = Post.first
  end

  def create
    @post = Post.create(post_params)
    redirect_to @post
  end

  def edit
    @users = User.all
  end

  def update
    byebug
    @post.update(post_params)
    redirect_to @post
  end

  def destroy
    @post.destroy
    redirect_to posts_path
  end

  private

  def find_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content, :sponsor, :user_id)
  end
end
