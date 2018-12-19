module ActiveRecord
  class Base
      def self.all # should have all the instances (rows) from the database
        # touch the database, read from the database
        DB[:conn].execute("SELECT * FROM #{self.class.to_s.downcase.pluralize}").each do |row|
          # oh no, what if we run .all twice?
          the_instance = ALL.find do |instance|
            instance.id == row["id"]
          end
          if !the_instance
            self.class.new(row)
          end
        end

        ALL
      end
  end
end

# EVERYTHIHNG!
# Tweet => tweets
class Tweet < ActiveRecord::Base
  attr_reader :id # this represents that integer in the id colukn in the database
  attr_accessor :message, :username
  ALL = []

  def self.all # should have all the instances (rows) from the database
    # touch the database, read from the database
    DB[:conn].execute("SELECT * FROM tweets").each do |row|
      # oh no, what if we run .all twice?
      the_instance = ALL.find do |instance|
        instance.id == row["id"]
      end
      if !the_instance
        Tweet.new(row)
      end
    end

    ALL
  end

  # active record gives you a ton of these
  def self.create(props={})
    tweet = Tweet.new(props)
    tweet.save
  end

  def initialize(props={}) # props => properties
    # if you give it nothing for message
    @message = props['message'] # will not break
    @username = props['username']
    @id = props['id'] # nil
    # provides one even more meta trick for ActiveRecord
    # loop through that hash
    ALL << self
  end

  # CRUD
  # only CREATE
  # UPDATE
  def save # instance method
    # SQL INJECTION
    # parameterization
    # HEREDOC
    sql = <<-SQL
      INSERT INTO tweets (username, message)
      VALUES (?, ?);
    SQL
    # persist that instance to the database
    # Create
    if !self.id # self.id == nil # what is this conditional?
      DB[:conn].execute(sql, self.username, self.message)
      @id = DB[:conn].execute("SELECT * FROM tweets").last["id"]
    else
    # Update
    # DB[:conn].execute("UPDATE ")
      puts "updates instead"
    end

    # When does the id get updated? How do we get it?
    self
  end
end
