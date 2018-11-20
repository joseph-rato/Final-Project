json.partial! 'product', product: @product


json.reviews @product.reviews do |review|
  json.set! review.id do
    json.partial! 'api/reviews/review', review: review
  end
end
user_arr = @product.reviewers + @product.commenters
json.users user_arr do |user|
  json.set! user.id do 
    json.partial! 'api/users/user', user: user
  end
end

json.productDiscussions @product.product_discussions do |comment|
  json.set! comment.id do 
    json.partial! 'api/product_discussions/product_discussion', product_discussions: comment
  end
end


