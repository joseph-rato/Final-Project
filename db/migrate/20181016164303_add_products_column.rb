class AddProductsColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :video_link, :string
  end
end
