require_relative '../program' # I don't think i'm supposed to need this?
# describe
# do
# expect
# equals
# it

# We test three different things all the time
describe "program" do
  describe "#palindrome?" do
    # 1. True => it works in the positive case
    # these it blocks describe one particular test
    it "should return true if the string is a palindrome" do
      expect(palindrome?("racecar")).to equal(true)
      expect(palindrome?("noon")).to equal(true)
      expect(palindrome?("tacocat")).to equal(true)
    end

    # 2. False => it works in the negative case
    it "should return false if the string is not a palindrome?" do
      expect(palindrome?("plural")).to equal(false)
      expect(palindrome?("everything")).to equal(false)
      expect(palindrome?("flatiron")).to equal(false)
    end

    # 3. Edge Cases
    # the actual characters minus the spaces => regardless of whitespace
    # the person who gets to decide is Zordon
    it "should return true if the sentence is a palindrome?" do
      expect(palindrome?("a man a plan a canal panama")).to equal(true)
    end

    it "should return false if the word is shorter than 3 characters" do
      expect(palindrome?("I")).to equal(false)
      expect(palindrome?("")).to equal(false)
      expect(palindrome?("oo")).to equal(false)
    end

    # real heavy edge cases, that's QA
    # punctuation!

    # aaa

    # accented characters

    # other alphabets like emoji, 日本語

    # numbers oh wikipedia, you're messing up the lecture!
    it "should return true if you give it a number that's a palindrome" do
      expect(palindrome?(111)).to equal(true)
    end

    it "should return false if you give it a number that's not a palindrome" do
      expect(palindrome?(123)).to equal(false)
    end

    # FalseClass, TrueClass, nil, [], {}
    # raise some sort of error
    it "should raise ArgumentError if you give it nonsense input" do
      expect{ palindrome?(TrueClass) }.to raise_error(ArgumentError)
      expect{ palindrome?({}) }.to raise_error(ArgumentError)
      expect{ palindrome?(true) }.to raise_error(ArgumentError)
      expect{ palindrome?([]) }.to raise_error(ArgumentError)
    end

    # captialization
    it "should return true if the word has capitalization" do
      expect(palindrome?("Racecar")).to equal(true)
      expect(palindrome?("TacoCat")).to equal(true)
      expect(palindrome?("Mom")).to equal(true)
    end

    # size limit <== very hard for us to test

  end
end
