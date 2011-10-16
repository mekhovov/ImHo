module ApplicationHelper
  def like_class photo_id
    return "empty" unless current_user
    current_user.likes.where(:attach_id => photo_id).count.zero? ? "like-button" : "existing"
  end

  def get_js_and_styles jquery_file_name
    render :partial => 'layouts/inc', :locals => {:jquery_file_name => jquery_file_name}
  end

  def show_comments user, comments
    render :partial => "comments/show_comments", :locals => {:user => user, :comments => comments}
  end
    
  def show_photos user, view_type
    render :partial => view_type, :locals => {:photos => user.attaches} unless user.attaches.blank?
  end
    
  def view_type_select user
    render :partial => 'switch', :locals => {:user => user}
  end
   
  def new_photo form
    render :partial => 'new_photo', :locals => {:f => form}
  end
    
  def edit_user_photos form
    render :partial => 'edit_user_photos', :locals => {:f => form}
  end
  
end
