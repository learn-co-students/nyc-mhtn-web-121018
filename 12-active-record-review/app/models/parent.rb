class Parent < ActiveRecord::Base
  has_many :kid_parents
  has_many :kids, through: :kid_parents
end
