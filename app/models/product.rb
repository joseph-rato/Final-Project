class Product < ApplicationRecord
  validates :user_id, :product_name, :website, :photos, :description, presence: true
  validates :product_name, uniqueness: true

  belongs_to :user
  has_one_attached :photos
  has_one_attached :list_photo
  has_many :reviews
  has_many :product_discussions
end
