module SessionsHelper
    def log_in(user)
        @@token = SecureRandom.hex
        user.token = @@token
        user.session = 1
        user.save
        set_current_user(user)
    end

    def set_current_user(user)
        @@user = user
    end

    def current_user
        @@user
    end

    def logged_in?
        !!(@@token == current_user.token)
    end

    def log_out
        @@token = "0"
        current_user.token = 0
        current_user.session = nil
        current_user.save
        set_current_user(nil)
    end
end
