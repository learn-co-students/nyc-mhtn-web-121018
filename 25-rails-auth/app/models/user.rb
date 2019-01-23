class User < ApplicationRecord

  # getter
  def password
    self.password_digest
  end

  # setter
  def password=(password)
    # byebug
    self.password_digest = BCrypt::Password.create(password)
  end
end
