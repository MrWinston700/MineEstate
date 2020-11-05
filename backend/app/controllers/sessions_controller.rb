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
        
        binding.pry
        @user = User.find_by(username: username)

          if @user && @user.authenticate(params[:password])
            log_in @user
          else
            @error = "could not log in. user or password is invalid"
          end
    end
  
  
    def destroy
      log_out
    end

    private

    def session_params
      params.require(:user).permit(:username, :password)
    end
end
