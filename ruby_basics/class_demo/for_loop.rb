puts 'Enter number:'
num=gets.chomp.to_i

# 1...100 does not include last numbe
# 1..100 does include last numbe
for number in 1..num
    puts number
end