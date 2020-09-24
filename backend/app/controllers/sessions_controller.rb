class SessionsController < ApplicationController
    def home  
      # this should render all the house infos to the dom 
    end
  
    def create
        #this will establish our sessions      
        @user = User.find_by(username: username) || @user = User.create(name: name, password: SecureRandom.hex)

          if @user && @user.authenticate(params[:password])
            log_in @user 
          else
            @error = "could not log in. user or password is invalid"
          end
    end
  
  
    def destroy
      log_out
    end
end
