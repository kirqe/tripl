# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  Offer.create(
    title: FFaker::Lorem.sentence,
    excerpt: FFaker::Lorem.paragraph,
    description: FFaker::Lorem.paragraphs,
    location: "#{FFaker::Address.country}, #{FFaker::Address.city}, #{FFaker::Address.street_address}",
    latitude: FFaker::Geolocation.lat,
    longitude: FFaker::Geolocation.lng,
    offer_type: "Job",
    salary: "1000.00",
    currency: FFaker::Currency.code,
    name: FFaker::Name.name,
    phone: FFaker::PhoneNumber.phone_number,
    email: FFaker::Internet.free_email,
    expire_at: "2016-09-13",
    approved_at: "2016-09-13 19:16:13"
  )
end
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')