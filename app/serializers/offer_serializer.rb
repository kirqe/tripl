class OfferSerializer < ActiveModel::Serializer
  include ActionView::Helpers::DateHelper
  attributes :id, :title, :excerpt, :description,
             :location, :latitude, :longitude,
             :offer_type, :salary, :currency,
             :name, :phone, :email,
             :expire_at, :approved_at, :created_at

  def expire_at
    object.expire_at.to_formatted_s(:short) unless object.expire_at.nil?
  end
end
