class UsersController < ApplicationController
    
    def create
        @user = User.new(house_params)
        @user.password = params[:password]
        status = "bad"
      
        if @user.valid?
          @user.save
          
          log_in @user
          allHouses = House.all
          render json: HouseSerializer.new(allHouses).to_serialized_json
        end
    end
   
    private

    def house_params
      params.require(:user).permit(:username, :password, :email, :country, :state)
    end
end
