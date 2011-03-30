require File.dirname(__FILE__) + '/spec_helper'

describe Attach do
  before :each do
    @attach = Attach.create valid_attach_attributes
  end
  
  it "should be valid" do
    @attach.should be_valid
  end
  
  it "should have many comments" do
    @attach.comments << Comment.new(:comment => 'cmn')
    @attach.comments.should_not be_empty
    
    @attach.comments << Comment.new(:comment => 'cmn')
    @attach.comments.size.should be_eql(2)
  end
  
  it "should respond to thumbnail_path and thumbnail_url" do  
    @attach.thumbnail_path.should be_eql(@attach.photo.path.gsub(/([^\/\.]+)\..*$/) {$1 + "_crop.png"})
    @attach.thumbnail_url.should be_eql(@attach.photo.url.gsub(/([^\/\.]+)\..*$/) {$1 + "_crop.png"})
  end
  
  it "should create a thumbnail" do
    File.exist?(@attach.thumbnail_path).should be_true
  end
  
end

