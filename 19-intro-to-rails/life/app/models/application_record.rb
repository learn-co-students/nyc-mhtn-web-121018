class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  # if you want common functionality between all your models, already abstracted for you
end
