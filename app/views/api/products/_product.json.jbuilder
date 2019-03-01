json.extract! product, :id, :user_id, :product_name, :website, :social, :description, :around_the_web, :details
  json.logoPhoto url_for(product.list_photo)

  json.displayPhotos url_for(product.photos)
json.tags @product.tags do |tag|
  json.set! tag.tag do 
    json.partial! 'api/tags/tag', tag: tag
  end
end
