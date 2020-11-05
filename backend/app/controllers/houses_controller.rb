class HousesController < ApplicationController
    def create
      binding.pry
      house = House.create(house_params)
      
      
      render json: HouseSerializer.new(house).to_serialized_json
    end

    private

    def house_params
      params.require(:house).permit(:price, :description, :size, :style, :neighborhood)
    end

end
