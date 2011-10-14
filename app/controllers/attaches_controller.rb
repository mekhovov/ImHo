class AttachesController < ApplicationController


  def edit
  @edit_photo = Attach.find_by_id(params[:id])
  end

  def show
    redirect_to :controller => :users, :action => :show, :id => Attach.find_by_id(params[:id]).user.id, :photo => params[:id]
  end

  def raw

    edit_photo = Attach.find_by_id(params[:edited_photo][:photo_id])
    name = edit_photo.photo_file_name
    data = params[:edited_photo][:photo]

    @file_content = File.open("#{Rails.root.to_s}/tmp/#{name}", "wb") do |f|
      f.write(Base64.decode64(data))
    end

    if params[:edited_photo][:new_img] == "true"
      @image = Attach.new(:photo => File.new("#{Rails.root.to_s}/tmp/#{name}"))
      @image.user_id = params[:edited_photo][:user_id]
      @image.save
  else
    edit_photo.update_attributes(:photo => File.new("#{Rails.root.to_s}/tmp/#{name}"))
    edit_photo.save
  end
  

    File.unlink("#{Rails.root.to_s}/tmp/#{name}")

  end
end
