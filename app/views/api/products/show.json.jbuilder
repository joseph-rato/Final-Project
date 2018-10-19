json.partial! 'product', product: @product


json.reviews @product.reviews do |review|
  json.partial! 'api/reviews/review', review: review
end
json.users @product.reviewers do |user|
  json.partial! 'api/users/user', user: user
end
