module SessionsHelper
    def log_in(user)
        @@token = SecureRandom.hex
        user.token = @@token
        set_current_user(user)
        binding.pry
    end

    def set_current_user(user)
        @my_user = user
    end

    def current_user
        @my_user
    end

    def logged_in?
        !!(@@token == current_user.token)
    end

    def log_out
        @@token = "0"
        set_current_user(nil)
        binding.pry
    end
end
