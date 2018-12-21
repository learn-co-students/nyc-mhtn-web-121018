class Santum < ActiveRecord::Base
  has_many :kids
  has_many :presents
end
