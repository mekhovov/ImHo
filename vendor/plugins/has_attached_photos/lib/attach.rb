require 'paperclip'

class Attach < ActiveRecord::Base
  belongs_to :user

  has_many :comments
  has_attached_file :photo, :styles => { :large => "640x480", :medium => "200x200>", :thumb => "100x100>" }

  def method_missing name, *args
    super
  rescue NoMethodError
    self.photo.send(name.to_s[/([^_]+)$/]).gsub(/original/) {"thumb"} if name.to_s =~ /^thumbnail/ || raise
  end

#  after_save do |record|
#	  record.create_thumbnail
#    record.resize_image! :height => 450, :width => 600
#  end
  
  def create_thumbnail
    ImageScience.with_image(self.photo.path) do |image|
      image.thumbnail(100) do |thumb|
        thumb.save self.thumbnail_path
      end     
    end
  end
  
  def resize_image! preview
    preview.each_pair do |dimension, value|
      ImageScience.with_image(self.photo.path) do |image|
        image.thumbnail(value){|img| img.save self.photo.path} if image.send(dimension) > value
      end
    end  
  end 
end