# json.extract! @review, :rating, :comment, :pro, :con, :product_id, :user_id, :time_used
json.set! @review.id do 
    json.partial! 'review', review: @review
end
