class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.string :comment, null: false
      t.string :pro
      t.string :con
      t.string :string
      t.integer :product_id, null: false
      t.integer :user_id, null: false
      t.string :time_used

      t.timestamps
    end

    add_index :reviews, [:product_id, :user_id], unique: true
  end
end
