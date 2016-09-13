class CreateOffers < ActiveRecord::Migration[5.0]
  def change
    create_table :offers do |t|
      t.string :title
      t.text :excerpt
      t.text :description
      t.string :location
      t.float :latitude
      t.float :longitude
      t.string :offer_type
      t.decimal :salary
      t.string :currency
      t.string :name
      t.string :phone
      t.string :email
      t.date :expire_at
      t.datetime :approved_at

      t.timestamps
    end
  end
end
