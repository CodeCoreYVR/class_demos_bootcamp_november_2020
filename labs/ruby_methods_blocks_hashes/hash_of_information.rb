def get_user_info
user = Hash.new
  
  puts "What is your first name?"
  user[:first_name] = gets.chomp.capitalize
  
  puts "What is your last name?"
  user[:last_name] = gets.chomp.capitalize
  
  puts "Where were you born?"
  user[:city_of_birth] = gets.chomp.capitalize
  puts "What is your age?"
  user[:age] = gets.chomp
  
  user
    
  end

  puts get_user_info