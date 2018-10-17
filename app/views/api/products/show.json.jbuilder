json.partial! 'product', product: @product
json.reviews @product.reviews do |review|
  # debugger
  json.partial! 'api/reviews/review', review: review
end
