class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :username
      t.string :website
      t.string :session_token

      t.timestamps
    end
  end
end
