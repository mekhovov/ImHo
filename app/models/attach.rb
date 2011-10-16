class Attach < ActiveRecord::Base

  belongs_to :user
  
  has_many :comments, :dependent => :destroy
  has_many :likes, :dependent => :destroy
  has_attached_file :photo, 
                    :styles => { :large => "800x600>", :medium => "300x300>", :thumb => "100x100>" },
                    :default_style => :large,
                    :default_url => "/images/no_photo.png"	# copy img to plugin

  def method_missing name, *args
    super
  rescue NoMethodError
    self.photo.send(name.to_s[/([^_]+)$/]).gsub(/original/) {"thumb"} if name.to_s =~ /^thumbnail/ || raise
  end

end