# Load the rails application
require File.expand_path('../application', __FILE__)

# will paginate for arrays
require 'will_paginate/array'

# Initialize the rails application
ImHo::Application.initialize!

# web-app-theme: show form error messages inside the generated forms
ActionView::Base.field_error_proc = Proc.new do |html_tag, instance|
  if html_tag =~ /<label/
    %|<div class="fieldWithErrors">#{html_tag} <span class="error">#{[instance.error_message].join(', ')}</span></div>|.html_safe
  else
    html_tag
  end
end


