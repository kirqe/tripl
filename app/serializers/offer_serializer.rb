class OfferSerializer < ActiveModel::Serializer
  attributes :id, :title, :excerpt, :description,
             :location, :latitude, :longitude,
             :offer_type, :salary, :currency,
             :name, :phone, :email,
             :expire_at, :approved_at, :created_at
end
