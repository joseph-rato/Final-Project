class Api::ProductDiscussionsController < ApplicationController

  before_action :require_loggin, except: [:show]
  def create
    @product_discussions = ProductDiscussion.new(pd_params)
    @product_discussions.user_id = params[:user_id]
    if @product_discussions.save
      render :show
    else
      render json: @product_discussions.errors.full_messages, status: 422
    end
  end

  def show
    @product_discussions = ProductDiscussion.find(params[:id])
  end

  def update
    @product_discussions = ProductDiscussion.find(params[:id])
    if @product_discussions.user_id == params[:user_id] && @product_discussions.update(pd_params)
      render :show
    else
      render json: @product_discussions.errors.full_messages, status: 422
    end
  end


  def destroy
    @product_discussions = ProductDiscussion.find(params[:id])
    if @product_discussions.user_id == params[:user_id]
      @product_discussions.body.destroy
      render :show
    else
      render json: ["Only the author can delete their comment"], status: 401
    end
  end

  private
  def pd_params
    params.require(:product_discussions).permit(:body, :body_id, :review_id, :product_id)
  end
  
end
