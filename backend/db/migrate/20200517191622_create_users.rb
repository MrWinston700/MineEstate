class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :usesrname
      t.string :password_digest
      t.integer :houses_sold
      t.integer :houses_own

      t.timestamps
    end
  end
end
