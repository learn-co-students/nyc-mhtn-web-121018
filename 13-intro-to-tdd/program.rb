require 'pry'

# def is_palindrome?(word)
#   raise ArgumentError if !word.is_a?(String)
#   downcased_word = word.downcase.gsub(/\W/,"")
#   return false if downcased_word.length < 2
#   downcased_word == downcased_word.reverse
# end

# awesome code goes here
def palindrome?(word)
  # join
  # gsub > regular expressions
  # I test my assumptions

  if word.class != Fixnum && word.class != String
    puts "Hey yo, bad input. You're input is whack!"
    raise ArgumentError
  end

  real_word = word
  if word.class == Fixnum
    real_word = word.to_s
  end
  # real_word = word.to_s if word.class == Fixnum else word
  downcased_word = real_word.downcase # above the line that breaks
  whitespaceless_string = downcased_word.gsub(/\s/,'')
  if whitespaceless_string.length > 2
    whitespaceless_string == whitespaceless_string.reverse
  else
    false
  end
  # if whitespaceless_string == whitespaceless_string.reverse
  #   true
  # else
  #   false
  # end
end
