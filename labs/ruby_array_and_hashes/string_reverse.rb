puts "Enter a word"
greet = gets.chomp
last_index = greet.length - 1

reverse = []

last_index.downto(0) do |i|
    reverse << greet[i]
end

p reverse.join