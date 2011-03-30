ENV["RAILS_ENV"] ||= 'test'
require File.dirname(__FILE__) + "/../../../../config/environment" unless defined?(RAILS_ROOT)
require 'spec/rails'

def uploaded_file path, filename=nil
  filename ||= File.basename(path)
  t = Tempfile.new(filename)
  FileUtils.copy_file(path, t.path)
  (class << t; self; end;).class_eval do
    alias local_path path
    define_method(:original_filename) { filename }
    define_method(:content_type) {'image/jpeg' }
  end
  return t
end

def valid_user_attributes
  {:name => 'a',
   :email => 'aa@aa.aa',
   :password => 'aaaaaa'}
end

def valid_attach_attributes
  {:photo => uploaded_file("#{RAILS_ROOT}/vendor/plugins/has_attached_photos/spec/images/rails.png")}
end