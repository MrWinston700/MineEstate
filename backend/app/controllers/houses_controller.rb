class HousesController < ApplicationController
    def create
      
      house = House.new(house_params)
      binding.pry
      if current_user
        current_user << house
      end
    
      if house.valid?
        render json: HouseSerializer.new(house).to_serialized_json
      else
        status = "bad"
        render json: status.to_json
      end

    end

    def index
      houses = House.all 

      render json: HouseSerializer.new(houses).to_serialized_json
    end

    private

    def house_params
      params.require(:house).permit(:price, :description, :size, :style, :neighborhood)
    end

end
