debugger
json.set! @tags[0].tags do
    json.array! @tags do |tag|
        json.productId tag.product_id
    end
end