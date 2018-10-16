class RemoveUniquieReqReviews < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, :product_id
    remove_index :reviews, :user_id
  end
end
