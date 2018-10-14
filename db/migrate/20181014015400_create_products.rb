class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :user_id, null: false
      t.string :product_name, null: false
      t.string :website, null: false
      t.string :social
      t.string :photos, null: false
      t.string :video
      t.string :description, null: false
      t.string :around_the_web

      t.timestamps
    end
    add_index :products, :user_id
    add_index :products, :product_name, unique: true
  end
end
