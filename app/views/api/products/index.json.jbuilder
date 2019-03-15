json.set! :products do
  @products.each do |product|
    json.set! product.id do
      json.partial! 'product', product: product
    end
  end
end
json.set! :tags do 
  @products.each do |product|
    product.tags.each do |tag|
      json.set! tag.id do 
        json.partial! 'api/tags/tag', tag: tag
      end
    end
  end
end