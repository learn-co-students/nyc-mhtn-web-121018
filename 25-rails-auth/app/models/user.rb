class User < ApplicationRecord
  has_secure_password
  
  # getter
  # def password
  #   self.password_digest
  # end
  #
  # # setter
  # def password=(password)
  #   # byebug
  #   self.password_digest = BCrypt::Password.create(password)
  # end
  #
  # def authenticate(password)
  #   BCrypt::Password.new(self.password_digest) == password
  # end

end
