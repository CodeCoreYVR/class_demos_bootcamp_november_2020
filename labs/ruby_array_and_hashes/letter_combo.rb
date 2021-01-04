# alpha_string=["a","b","c","d"]
puts 'Enter string:'
str=gets.chomp
alpha_string=str.split ''
combo=[]
for num in 0..alpha_string.length-2
    combo<< "#{alpha_string[num]}#{alpha_string[num+1]}"
end

p combo