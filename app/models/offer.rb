# == Schema Information
#
# Table name: offers
#
#  id          :integer          not null, primary key
#  title       :string
#  excerpt     :text
#  description :text
#  location    :string
#  latitude    :float
#  longitude   :float
#  offer_type  :string
#  salary      :decimal(, )
#  currency    :string
#  name        :string
#  phone       :string
#  email       :string
#  expire_at   :date
#  approved_at :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Offer < ApplicationRecord
  
  CURRENCIES = [
    'USD',
    'EUR',
    'RUB'
  ]
  
  OFFERS = [
    'VOLUNTEERING',
    'JOB',
  ]
  
  validates :title, presence: true
  validates :excerpt, presence: true
  validates :description, presence: true
  validates :location, presence: true
  validates :offer_type, presence: true
  validates :salary, numericality:{
    greater_than_or_equal_to: 0.0,
    allow_nil: true
  }
  validates :currency, inclusion: {
    in: CURRENCIES,
    allow_blank: true
  }
  validates :name, presence: true
  validates :phone, presence: true
  validates :email, presence: true, format: {
    with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  }
  validates :expire_at, presence: true
  validates :name, presence: true
  
  
  geocoded_by :location
  after_validation :geocode
end
