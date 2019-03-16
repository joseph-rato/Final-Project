
@tags.each do |tag|
    json.set! tag.product_id do 
        json.partial! 'tag', tag: tag
    end
end