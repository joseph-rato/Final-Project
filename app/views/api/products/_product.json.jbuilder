json.extract! product, :id, :user_id, :product_name, :website, :social, :description, :around_the_web, :details
  json.logoPhoto url_for(product.list_photo)

  json.displayPhotos url_for(product.photos)

