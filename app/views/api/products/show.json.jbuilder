json.partial! 'product', product: @product


json.reviews @product.reviews do |review|
  json.set! review.id do
    json.partial! 'api/reviews/review', review: review
  end
end
user_arr = @product.reviewers + @product.commenters + [@product.user]
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

json.tags @product.tags do |tag|
  json.set! tag.id do 
    json.partial! 'api/tags/tag', tag: tag
  end
end



