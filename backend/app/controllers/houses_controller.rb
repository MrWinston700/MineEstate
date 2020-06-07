class HousesController < ApplicationController
    def create
      user = User.find(username: params[:username]) || User.create(username: params[:username]) 
    end
end
