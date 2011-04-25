class UsersController < ApplicationController
  shows_attached_photos
  
  def index
    @users = User.paginate :page => params[:page], :per_page => 5, :order => 'updated_at DESC'
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
    #get_view_type
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(params[:user])
      redirect_to @user, :notice  => "Successfully updated user."
    else
      render :action => 'edit'
    end
  end
end
