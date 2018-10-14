class Product < ApplicationRecord
  validates :user_id, :product_name, :website, :photos, :description, presence: true
  validates :product_name, uniqueness: true

  belongs_to :user
end
