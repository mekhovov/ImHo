class Like < ActiveRecord::Base
  belongs_to :user
  belongs_to :attach
  
  validates :user_id, :uniqueness => {:scope => :attach_id}

end
