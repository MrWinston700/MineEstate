class HousesController < ApplicationController
    def create
      user = User.find(username: params[:username]) || User.create(username: params[:username]) 

      house = House.create(price: params[:price], description: params[:description], size: params[:size], style: params[:style], neighborhood: params[:neighborhood])
      user.houses << house
    end
end
