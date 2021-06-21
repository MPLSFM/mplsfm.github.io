require 'pry'
require 'yaml'
require 'jekyll/utils'
if $ARGV.none?
  puts "Usage split-single-yaml-file.rb PATH_TO_FILE TOP_LEVEL_KEY TARGET_FOLDER"
  die
end
  
filename = $ARGV[0]
target_key = $ARGV[1]
target_folder = $ARGV[2]
handle = File.open(filename, 'r')
combined_file = YAML.load(handle.read)
handle.close
(combined_file[target_key]).each do |vendor|
  target_filename = Jekyll::Utils.slugify(vendor['name'])
  handle = File.open("#{target_folder}/#{target_filename}.yml", 'w') 
  handle.write(vendor.to_yaml)
end
puts "Done."
