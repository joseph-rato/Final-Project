class Product < ApplicationRecord
  validates :user_id, :product_name, :website, :photos, :description, presence: true
  validates :product_name, uniqueness: true

  belongs_to :user
  has_many_attached :photos
  has_one_attached :video
  has_one_attached :list_photo
end
