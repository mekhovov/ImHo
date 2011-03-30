class AddComments < ActiveRecord::Migration
  def self.up
    create_table :comments do |t|
      t.text :comment, :default => ""
      t.references :attach
      t.references :user
      t.timestamps
    end
    add_index :comments, :attach_id
    add_index :comments, :user_id
  end

  def self.down
  	drop_table :comments
  end
end
