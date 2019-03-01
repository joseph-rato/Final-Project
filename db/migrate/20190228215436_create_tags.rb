class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.integer :product_id, null: false
      t.string :tags, null: false
      t.timestamps
    end

    add_index :tags, :product_id
    add_index :tags, :tags
  end
end
