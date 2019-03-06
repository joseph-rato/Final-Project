class Api::TagsController < ApplicationController
    def index
        @tags = Tag.where({tags: `#{tag_params}`})
    end

    # might not need this method
    # how do we access the product_id params again need to remember/find out
    def show
        byebug
        @tag = Tag.where(product_id: params[:tags][:product_id])
        if @tag
            render :show
        else
            render json ['does not exist'], status 404
        end
    end

    #need to render index maybe instead of show not sure
    # activerecord-import is probably not working check it out
    # need to fix this create method not registrating real entries which makes the show method broken as well
    def create
        debugger
        byebug
        columns = [:tags, :product_id]
        values = [params[:tags][:tags], params[:tags][:product_id]]
        if Tag.import columns values
            
            render :show
        else
            render json: @tag.errors.full_messages, status 422
        end
    end
    def delete

    end
    def tag_params
        debugger
        params.require(:tags).permit(:product_id, :tags)
    end
end