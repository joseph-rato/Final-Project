json.set! @product_discussions.id do 
    json.partial! 'product_discussion', product_discussions: @product_discussions
end