json.partial! 'product', product: @product


json.reviews @product.reviews do |review|
  json.partial! 'api/reviews/review', review: review
end
json.users @product.reviewers do |user|
  json.partial! 'api/users/user', user: user
end
json.users @product.commenters do |user|
  json.partial! 'api/users/user', user: user
end 
json.productDisucssions @product.product_disucssions do |comment|
  json.partial! 'api/product_disucssions/product_disucssion', product_disucssions: comment
end
