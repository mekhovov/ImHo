require 'paperclip'

class Attach < ActiveRecord::Base
  belongs_to :user
  
  has_many :comments
  has_attached_file :photo, 
                    :styles => { :large => "640x480", :medium => "300x300>", :thumb => "100x100>" },
                    :default_style => :medium,
                    #:url => "/tmp/:attachment/:id/:style/:filename", #"http://some.other.host/stuff/:class/:id_:extension"
                    :default_url => "/images/no_photo.png"	# copy img to plugin
                    
	# has_attached_file :photo,
  #     :storage => :s3,
  #     :bucket => 'mybucket',
  #     :s3_credentials => {
  #       :access_key_id => ENV['AKIAJRB43QCKATT2VSFQ'],
  #       :secret_access_key => ENV['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']
  #     }

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