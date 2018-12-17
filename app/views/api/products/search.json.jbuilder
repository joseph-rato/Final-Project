debugger
json.products do 
    @products.each do |product|
        json.set! product.id do 
            json.partial! 'product', product: product
        end 
    end
end 
json.users do 
    @users.each do |user|
        json.set! user.id do 
            json.partial! 'api/users/user', user: user 
        end 
    end 
end