@tags.each do |tag|
    json.set! tag.tag do 
        json.partial! 'tag', tag: tag
    end
end