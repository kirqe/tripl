Rails.application.routes.draw do
  root "admin/dashboard#index"
  
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  constraints subdomain: 'api' do
    scope module: 'api' do
      namespace :v1 do
        resources :offers, only: [:index, :show, :create]
      end
    end
  end
  
end
