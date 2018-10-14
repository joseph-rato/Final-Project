class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def show
    @product = Product.find_by(params[:id])
    if @product
    else
      
    end
  end

  def create
  end

  def update
  end
end
