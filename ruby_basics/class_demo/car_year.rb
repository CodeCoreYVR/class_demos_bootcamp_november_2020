puts "What is the year of your car?"
year = gets.to_i

if year >2200
    puts 'The car is from future'
elsif year>=2010
    puts 'The car is new'
elsif year>2000
    puts 'The car is old'
else
    puts 'The car is very old'
end
