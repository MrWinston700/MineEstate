class ApplicationController < ActionController::API
    require 'securerandom'
    include SessionsHelper

    @@token = "0"
end
