require 'open-uri'
require 'digest/md5'

class Gravatar
	# save photo from gravatar

  BASE_URL = 'http://www.gravatar.com/avatar/'

  attr_reader :url, :image, :email, :file

  def initialize( user_email, size=200 )
    @email = user_email.downcase
    @size = size
    @url = build_url
    @file =  File.join(Rails.public_path, 'system', 'avatars', '_from_gravatar', "#{Digest::MD5.hexdigest( @email )}.png")
    save
  end

  def save( file=@file )
    open(file, 'wb') do |f|
      f << open(@url).read
    end
  end

  private

  def build_url
    digested_email = Digest::MD5.hexdigest( @email )
    return BASE_URL + digested_email + "?s=#{@size}" + '.png'
  end

end