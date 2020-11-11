class ApplicationController < ActionController::API
    require 'securerandom'
    include SessionsHelper

    @@token = "0"
    @@user = 0
end
