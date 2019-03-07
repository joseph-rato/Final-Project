@tags.each do |tag|

    json.set! tag.tags do 
        json.partial! 'tag', tag: tag
        
    end
end