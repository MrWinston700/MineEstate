class HousesController < ApplicationController
    def create
      user = User.find(username: params[:username]) || User.create(username: params[:username]) 

      house = House.create(house_params)
      user.houses << house
      user.save

      render json: house
    end

    private

    def house_params
      params.require(:house).permit(:price, :description, :size, :style, :neighborhood)
    end

end
