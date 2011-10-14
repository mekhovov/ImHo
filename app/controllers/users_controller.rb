class UsersController < ApplicationController
  shows_attached_photos
  
  def index
    @top_rated = Attach.all.sort_by {|att| att.likes.count}.reverse.paginate :page => params[:page], :per_page => 6
    @new_added = Attach.order('updated_at DESC').limit(12)
    @new_comments = Comment.order('updated_at DESC').limit(5)
    get_index_view_type
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      redirect_to @user, :notice => "Successfully created user."
    else
      render :action => 'new'
    end
  end

  def show
    @user = User.find(params[:id])
    if params[:photo]
      @user_photos = @user.attaches.all(:conditions => ["id NOT IN (?)", params[:photo]])
      @user_photos = @user.attaches.all(:conditions => ["id IN (?)", params[:photo]]) + @user_photos
    else
      @user_photos = @user.attaches
    end
    @user_photos = @user_photos.paginate :page => params[:page], :per_page => 9, :order => 'created_at DESC'

    @user.attaches.build
    get_view_type
  end

  def edit
    @user = User.find(params[:id])
    @user.attaches.build
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(params[:user])
      redirect_to @user, :notice  => "Successfully updated user."
    else
      render :action => 'edit'
    end
  end

  def guide
    @new_comments = Comment.order('updated_at DESC').limit(5)
    render :partial => "guide"
  end
end
