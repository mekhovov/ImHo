class LikesController < ApplicationController
  def create
    @like = Like.new params[:like]
    @like.user = current_user
    
    @like.save
    respond_to do |format|   
      format.js {render :text => "$('form#new_like_#{ @like.attach.id} span.like-button').removeClass('like-button').addClass('existing').html('#{@like.attach.likes.count}');"}
    end
  end
end
