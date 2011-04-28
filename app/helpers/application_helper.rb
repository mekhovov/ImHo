module ApplicationHelper
  def like_class photo_id
    return "empty" unless current_user
    current_user.likes.where(:attach_id => photo_id).count.zero? ? "like-button" : "existing"
  end
end
