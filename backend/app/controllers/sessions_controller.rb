class SessionsController < ApplicationController
  
    def create
      @user = User.find_by(username: params[:username])
    
      if @user && @user.authenticate(params[:password])
        log_in @user
        allHouses = House.all
        render json: HouseSerializer.new(allHouses).to_serialized_json
      end
          
    end
  
  
    def destroy
      log_out
      status = "good"
      render json: status.to_json
    end

    private

    def session_params
      params.require(:user).permit(:username, :password)
    end
end
