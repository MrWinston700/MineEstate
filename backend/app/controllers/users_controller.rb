class UsersController < ApplicationController
    
    def create
        @user = User.new(house_params)
        status = "bad"
        if @user.valid?
          @user.save
          log_in @user
          binding.pry
          status = "good"
          render json: status.to_json
        end
    end
   
    private

    def house_params
      params.require(:user).permit(:username, :password, :email, :country, :state)
    end
end
