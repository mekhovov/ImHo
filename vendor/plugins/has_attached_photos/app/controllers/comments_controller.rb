class CommentsController < ApplicationController

  unloadable

  def create   
    @comment = Comment.create({:user => current_user}.merge params[:comment])
    respond_to do |format|
      format.js {render :layout => false}
    end
  end 
  
  def index
    @comments = (Comment.find_all_by_attach_id params[:comment][:attach_id])
    respond_to do |format|
      format.js {render :layout => false}
    end
  end
  
end