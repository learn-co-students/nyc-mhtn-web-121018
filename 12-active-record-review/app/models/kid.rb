class Kid < ActiveRecord::Base
  belongs_to :santum
  has_many :presents
  has_many :kid_parents
  has_many :parents, through: :kid_parents
end
