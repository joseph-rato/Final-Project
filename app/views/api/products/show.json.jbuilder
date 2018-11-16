json.partial! 'product', product: @product


json.reviews @product.reviews do |review|
  json.partial! 'api/reviews/review', review: review
end
user_arr = @product.reviewers + @product.commenters
json.users user_arr do |user|
  json.partial! 'api/users/user', user: user
end

json.productDiscussions @product.product_discussions do |comment|
  json.partial! 'api/product_discussions/product_discussion', product_discussions: comment
end
