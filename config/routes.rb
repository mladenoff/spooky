Rails.application.routes.draw do

  root to: 'static_pages#root'

  post "api/search", to: 'api/tracks#search', defaults: { format: :json }

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      resources :playlists, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index]
    resources :playlists, only: [:create, :index, :show] do
      resources :playlistings, only: [:create]
    end
  end

end
