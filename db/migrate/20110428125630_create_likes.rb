class CreateLikes < ActiveRecord::Migration
  def self.up
    create_table :likes do |t|
      t.references :user
      t.references :attach
    end
  end

  def self.down
    drop_table :likes
  end
end
