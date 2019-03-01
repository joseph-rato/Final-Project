class Tag < ApplicationRecord 
    validates: :product_id, tags, presence: true
    
    belongs_to :product
end