class House < ApplicationRecord
    has_many_attached :pictures
    belongs_to :user, required: false
end
