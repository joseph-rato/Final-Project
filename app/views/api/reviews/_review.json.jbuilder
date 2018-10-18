json.set! review.id do
  json.extract! review, :rating, :comment, :pro, :con,
    :product_id, :user_id, :time_used
end
