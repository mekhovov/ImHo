require File.dirname(__FILE__) + '/spec_helper'

describe Comment do
  before :each do
    @comment = Comment.new
  end
  
  it "should validate comment" do
    @comment.should_not be_valid
    @comment.should have(1).error_on(:comment)
    
    @comment.comment = "cmn"
    @comment.should be_valid
  end
  
  it "should belong_to attach" do
    att = Attach.create valid_attach_attributes
    att.comments << @comment
    
    @comment.attach.should be_eql(att)
  end
  
  it "should belong to user" do
    user = User.create valid_user_attributes
    @comment.user = user
    
    @comment.user.should be_eql(user)
  end
end