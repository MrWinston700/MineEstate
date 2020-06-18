class SessionsController < ApplicationController
    def home  
      # this should render all the house infos to the dom  
    end
  
    def new
        #not sure if this is necessary
      @error = nil
      @user = User.new
    end
  
    def create
        #this will establish our sessions      
        User.find_by(username: username, password: password)@user = User.create(name: name, password: SecureRandom.hex) unless @user !=nil
        log_in @user 
        redirect_to user_path(@user)
      else
        @user = User.find_by(name: params[:name])
        
          if @user && @user.authenticate(params[:password])
            log_in @user 
            redirect_to user_path(@user)
          else
            @error = "could not log in. user or password is invalid"
            render 'sessions/new'
          end
      end
    end
  
  
    def destroy
      log_out
      redirect_to root_path '/'
    end
end
