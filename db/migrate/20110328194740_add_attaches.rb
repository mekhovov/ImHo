class AddAttaches < ActiveRecord::Migration
  def self.up
    create_table :attaches do |t|
      t.references :user
      t.string :photo_file_name
      t.string :photo_content_type
      t.integer :photo_file_size      
    end

  end

  def self.down
  	drop_table :attaches
  end
end
