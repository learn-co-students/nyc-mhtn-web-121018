# Dir[File.join(File.dirname(__FILE__), '../lib', '*.rb')].sort.each { |f| require f }

require 'pry'
require 'require_all'
require_relative '../lib/module'
require_relative '../lib/pet'
require_all 'lib' # alphabetical
