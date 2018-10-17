class CreateProductDiscussions < ActiveRecord::Migration[5.2]
  def change
    create_table :product_discussions do |t|
      t.integer :user_id, null: false
      t.integer :product_id
      t.string :body, null: false
      t.integer :body_id
      t.integer :review_id

      t.timestamps
    end
    add_index :product_discussions, :user_id
    add_index :product_discussions, :body_id
    add_index :product_discussions, :review_id
    add_index :product_discussions, :product_id
  end
end
