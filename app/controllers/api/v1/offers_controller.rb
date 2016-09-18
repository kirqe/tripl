module Api::V1
  class OffersController < ApiController
    def index
      render json: Offer.all
    end
  end
end
