class Api::TagsController < ApplicationController
    def index
        @tags = Tag.where({tags: `#{tag_params}`})
    end

    # might not need this method
    def show
        @tag = Tag.where({product_id: tag_params})
        if @tag
            render :show
        else
            render json ['does not exist'], status 404
        end
    end
    def create
        tags = []
        tag_params.tags each do |tag_name|
            tags << Book.new(:tags => tag_name, :product_id => product_id)
        endx
        if Tag.import tags
            render :show
        else
            render json: @tag.errors.full_messages, status 422
        end
    end
    def delete

    end
    def tag_params
        params.require(:tags).permit(:product_id, :tags)
    end
end