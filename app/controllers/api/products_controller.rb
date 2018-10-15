class Api::ProductsController < ApplicationController
  before_action :require_loggin, only: [:create, :update]
  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
    if @product
      render :show
    else
      render json: ['does not exist'], status: 404
    end
  end

  def create
    @product = product.new(product_params)
    @product.user_id = current_user
    if @product.save
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def update
    @product = product.find(params[:id])
    if @product && @product.update(product_params)
      render :show
    else
      render @product.errors.full_messages, status: 422
    end
  end

  private
  def product_params
      params.require(:product).premit(:product_name, :website, :social, :photos, :video, :description, :around_the_web)
  end
end
