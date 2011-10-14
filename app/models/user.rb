class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable #, :confirmable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :name, :avatar, :attaches_attributes

  has_attached_photos
  has_many :likes, :dependent => :destroy
  
  accepts_nested_attributes_for :attaches, :allow_destroy => true#, :reject_if =>  proc{ |att| att['photo'].blank?}

	has_attached_file(:avatar,
		:default_url => ":gravatar_url",
		:default_style => :thumb,
		:styles => {
			:small => "64x64#",
			:medium => "100x100#",
			:thumb => "40x40#",
		}
	)

  # get avatar from gravatar if not specified
  Paperclip.interpolates(:gravatar_url) do |attachment, style|
    size = nil
    size_data = attachment.styles[style][:geometry]
    if size_data
      if thumb_size = size_data.match(/\d+/).to_a.first
        size = thumb_size.to_i
      end
    end
  attachment.instance.gravatar_url(size)
  end

  def gravatar_url(size = 200)
    hash = Digest::MD5.hexdigest(email.downcase.strip)[0..31]
    "http://www.gravatar.com/avatar/#{hash}?s=#{size}.png"
  end

  def full_name
    name.blank? ? email[/^[\w\.]*/] : name
  end

end
