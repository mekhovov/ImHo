class AttachesController < ApplicationController
  def edit
   # render :partial => 'edit'
  @edit_photo = Attach.find_by_id(params[:id])
  end
end
