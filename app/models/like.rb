class Like < ApplicationRecord
    validates :user_id, :liked_type, :liked_id, presence: true
    validates_uniqueness_of :user_id, uniqueness: {scope: [:liked_type, :liked_id]}

    belongs_to :user
    
    belongs_to :liked, polymorphic: true
end
