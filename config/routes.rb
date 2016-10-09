Rails.application.routes.draw do
  root "admin/dashboard#index"

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope module: 'api', constraints: { subdomain: 'api' } do
    namespace :v1 do
      resources :offers, only: [:index, :show, :create]
      get '/locations', to: "offers#locations" # list of coords for map
    end
  end



end
