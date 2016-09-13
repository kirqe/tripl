FactoryGirl.define do
  factory :offer do
    title FFaker::Lorem.sentence
    excerpt FFaker::Lorem.paragraph
    description FFaker::Lorem.paragraphs
    location "#{FFaker::Address.country}, #{FFaker::Address.city}, #{FFaker::Address.street_address}"
    latitude FFaker::Geolocation.lat
    longitude FFaker::Geolocation.lng
    offer_type "Job"
    salary "1000.00"
    currency FFaker::Currency.code
    name FFaker::Name.name
    phone FFaker::PhoneNumber.phone_number
    email FFaker::Internet.free_email
    expire_at "2016-09-13"
    approved_at "2016-09-13 19:16:13"
  end
end
