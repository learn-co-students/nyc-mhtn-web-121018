class BeverageSerializer < ActiveModel::Serializer
  attributes :id, :name,:fizzy
  # specify your relationships 
end
