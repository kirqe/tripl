ActiveAdmin.register Offer do
  permit_params :title, :excerpt, :description, :location, :latitude,
  :longitude, :offer_type, :salary, :currency, :name, :phone, :email, :expire_at, :approved_at

  index do
    selectable_column
    id_column
    column :title
    # column :location
    column :offer_type
    column :name
    column :phone
    column :email
    column :created_at
    actions
  end

  filter :title
  filter :location
  filter :name
  filter :email
  filter :created_at

  form do |f|
    f.inputs "Offer details" do
      f.input :title
      f.input :excerpt
      f.input :description
      f.input :location
      f.input :offer_type, as: :select, collection: Offer::OFFERS, include_blank: false
      f.input :salary
      f.input :currency, as: :select, collection: Offer::CURRENCIES, include_blank: false
      f.input :phone
      f.input :email
      f.input :expire_at
      f.input :approved_at
    end
    f.actions
  end

end
