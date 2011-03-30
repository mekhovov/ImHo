require File.dirname(__FILE__) + '/spec_helper'

describe "has_attached_photos extension" do
  before :each do
    @user = User.new valid_user_attributes
  end
  
  it "should have many attachments" do
    @user.attaches << Attach.new(valid_attach_attributes)
    @user.attaches.should_not be_empty
    
    @user.attaches << Attach.new(valid_attach_attributes)
    @user.attaches.size.should be_eql(2)
  end
  
  it "should build empty attachment after initializing, if no params passed" do
    @user.attaches.should be_empty
    
    @user = User.new
    @user.attaches.size.should be_eql(1)
  end
end