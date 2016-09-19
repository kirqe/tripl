module Api::V1
  class OffersController < ApiController
    before_action :set_offer, only: [:show]
    
    def index
      @offers = Offer.all
      render json: @offers
    end
    
    def show
      render json: @offer
    end
    
    def create
      @offer = Offer.new(offer_params)
      if @offer.save
        render json: @offer, status: :created, location: @offer
      else
        render json: @offer.errors, status: :unprocessable_entry
      end
    end
    
    private
    def set_offer
      @offer = Offer.find(params[:id]);
    end
    
    def offer_params
      params.require(:offer).permit(:title, :excerpt, :description, :location,
                                    :offer_type, :salary, :currency,
                                    :name, :phone, :email,
                                    :expire_at)
    end
  end
end
