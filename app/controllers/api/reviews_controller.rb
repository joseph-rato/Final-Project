class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errros.full_messages, status: 422
    end
  end
  

  private
  def review_params
    params.require(:reviews).permit(:rating, :comment, :pro, :con, :string, :product_id, :user_id, :time_used)
  end
end
