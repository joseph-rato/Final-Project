class ReviewRemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :string
  end
end
