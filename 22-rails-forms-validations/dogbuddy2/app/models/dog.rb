class Dog < ApplicationRecord
  # barren wasteland
  # assocations/relationships
  # custom methods?

  # why does the validation go here?
  # 1. controller is the other place =>
  # but it's bad because:
  # annoying to abstract and clean up
  # 2. model is what is supposed to touch the database
  # since they are the ones to touch, they are the gateway
  validates :name, presence: true

  validate :super_cute_exception

  def super_cute_exception
    # if you have a nested if, combine the ifs
    if cuteness_level <= 9000
      # validates :breed, presence: true
      if breed.length == 0
        errors.add(:cuteness_level, "Not cute enough, need a breed.")
      end
    end
  end
end
