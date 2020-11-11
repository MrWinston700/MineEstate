class HouseSerializer < ActiveModel::Serializer
  def initialize(house_object)
    @house = house_object
  end

  def to_serialized_json
    options = {
      include: {
        user: {
          only: [:id, :username, :state, :country, :session]
        }
      },
      except: [:updated_at, :created_at],
    }
    @house.to_json(options)
  end
end
