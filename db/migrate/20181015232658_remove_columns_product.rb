class RemoveColumnsProduct < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :video
    remove_column :products, :photos
  end
end
