require 'bundler'
Bundler.require

# bundler
# it's a gem, a gem is a library which is code
# Ruby is gem, hence gem, developers love puns

# CONSTANT
DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}

DB[:conn].results_as_hash = true

require_relative '../lib/tweet.rb'
require_relative '../lib/tweets_app.rb'
