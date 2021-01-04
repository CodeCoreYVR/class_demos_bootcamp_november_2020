result={}

puts "Enter a first name"
result["first name"] = gets.chomp.capitalize

puts "Enter a last name"
result["last name"] = gets.chomp.capitalize

puts "Enter a city name"
result["city name"] = gets.chomp.capitalize

puts "Enter a age"
result["age"] = gets.chomp

p result

result.each do |key, value|
    p "Your #{key} is #{value}"
end 