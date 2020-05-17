class CreateHouses < ActiveRecord::Migration[6.0]
  def change
    create_table :houses do |t|
      t.integer :price
      t.string :description
      t.string :size
      t.string :style
      t.integer :neighborhood

      t.timestamps
    end
  end
end
