class ProductDiscussion < ApplicationRecord
  validates :body, :user_id, presence: true

  belongs_to :user
  belongs_to :product, optional: true
  belongs_to :review, optional: true

  has_many :child_comments,
  foreign_key: :body_id,
  class_name: :ProductDiscussion,
  primary_key: :id

  belongs_to :parent_comments,
  foreign_key: :body_id,
  class_name: :ProductDiscussion,
  primary_key: :id,
  optional: true

end
