class AddSessionToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :session, :integer
  end
end
