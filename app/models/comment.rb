class Comment < ActiveRecord::Base
  belongs_to :attach
  belongs_to :user
  validates_presence_of :comment
end
