class Api::ProductsController < ApplicationController
  before_action :require_loggin, only: [:create, :update]
  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
    # .include(:reviews).include(user: [:username, :headline])
    if @product
      render :show
    else
      render json: ['does not exist'], status: 404
    end
  end

  def create
    @product = Product.new(product_params)
    @product.user_id = current_user.id
    if @product.save
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product && @product.update(product_params)
      render :show
    else
      render @product.errors.full_messages, status: 422
    end
  end

  # wrap up entire querry 
  # n+1 queries .include 
  # if debugging
  def search
    result = "%#{params[:query_string].downcase}%"
    @products = Product.where(<<-SQL, result)
      lower(product_name) LIKE ? 
    SQL
    @users = User.where(<<-SQL, result)
      lower(username) LIKE ? 
    SQL
    # need to make a jbuilder that's correct instead of this one
    render :search
  end

  private
  def product_params
    params.require(:product).permit(:user_id, :product_name, :website, :social, :photos, :video_link, :description, :details, :around_the_web, :list_photo, :query_string)
  end
end
