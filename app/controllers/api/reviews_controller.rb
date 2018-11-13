class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by_id(params[:id])
    if current_user && current_user.id == @review.user_id
      @review.destroy
      render :show
    else 
      render(json:["Unauthorized"], status: 401)
    end
  end
  

  private
  def review_params
    params.require(:reviews).permit(:rating, :comment, :pro, :con, :string, :product_id, :user_id, :time_used)
  end
end
