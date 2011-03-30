class HasAttachedPhotosGenerator < Rails::Generator::NamedBase

  attr_accessor :migration_name
 
  def initialize args, options = {}
    super
    @class_name = args[0].underscore.camelize.tableize
  end
 
  def manifest
    @migration_name = 'add_attaches_and_comments'

    dir_path = {File.join('static_files', 'javascripts') => {File.join('public', 'javascripts') => %w[photos.js spacegallery.js utils.js]},
                File.join('static_files', 'stylesheets') => {File.join('public', 'stylesheets') => %w[filmstrip.css spacegallery.css]},
                File.join('static_files', 'images', 'has_attached_photos') => {File.join('public', 'images', 'has_attached_photos') => %w[panel.jpg pic_bg.png blank.gif]}}

    record do |m|
      #create migration
      unless options[:skip_migration]
        m.migration_template 'has_attached_photos_migration.rb.erb',
                             File.join('db', 'migrate'),
                             :migration_file_name => @migration_name
	  	end
      #add routes
      m.route_resources :attaches, :comments
      #copy files
      dir_path.each_pair do |plugin_path, target_path|
        m.directory target_path.keys.first
        target_path.values.first.each do |file|
          m.file File.join(plugin_path, file), File.join(target_path.keys.first, file)
        end
      end
    end
  end 
 
end
