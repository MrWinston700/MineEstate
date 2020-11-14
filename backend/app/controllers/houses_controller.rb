class HousesController < ApplicationController

    def create
      
      house = House.new(house_params)
      if current_user
        current_user.houses << house
      end

      if house.valid?
        allHouses = House.all
        render json: HouseSerializer.new(allHouses).to_serialized_json
      else
        status = "bad"
        render json: status.to_json
      end

    end

    def destroy
      
      house = House.find_by_id(params[:id])
      house.destroy
      
    end


    private

    def house_params
      params.require(:house).permit(:price, :description, :size, :style, :neighborhood)
    end

end
