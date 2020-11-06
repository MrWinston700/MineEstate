class SessionsController < ApplicationController

    
    def home  
      # this should render all the house infos to the dom 
      if logged_in?
        binding.pry
      else
        redirect_to new_session_path
      end
    
    end

    def new
      
    end
  
    def create
        
        @user = User.find_by(username: params[:username])
        status = "bad"
          if @user && @user.authenticate(params[:password])
            log_in @user
            status = "good"
            render json: status.to_json
          else
            render json: status.to_json
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
