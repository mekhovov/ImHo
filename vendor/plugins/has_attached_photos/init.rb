require 'has_attached_photos'
require File.join File.dirname(__FILE__), 'lib', 'attach'
require File.join File.dirname(__FILE__), 'lib', 'comment'

ActiveRecord::Base.send :include, HavePhotos::Roled::Acts
ActionController::Base.send :include, HavePhotos::ShowPic::Controller
ActionView::Base.send :include, HavePhotos::PhotoViewHelper

ApplicationController.send(:define_method, :current_user, lambda{nil}) unless ApplicationController.respond_to? :current_user