class User < ApplicationRecord
    has_many :houses
    has_secure_password
   
end
