# to run ruby file in terminal we use following syntax
# Extension of ruby file is '.rb'
=begin
# >ruby <file_name.rb>
#  with puts it adds \n at the end
puts "Hello World"
# with prints it doesn't add new line(\n) at the end
print "Hello World! \n Printing somethign else"

p("Hello World! \n Printing somethign else")
=end

# Single line Comment
# This is a comment - we use hash (#)

=begin
this is multiple 
line comments 
in ruby
/*
multiple line comments in JS
*/
=end

# Most people
# including me 
# will use this way of multiple comments

# Inline Comment

# puts 'This is a in line comment ' # In line comment
=begin
a=1
puts a
b= a + 5

puts b

MAX_PASSWORD_ATTEMPT=5
puts MAX_PASSWORD_ATTEMPT
MAX_PASSWORD_ATTEMPT=6
puts MAX_PASSWORD_ATTEMPT



new_var="Hello"
new_var_2="world" 

c= new_var + new_var_2
puts c

# Taking input from user 

puts "What is your name?"
user_name=gets
puts user_name


# .chomp it removes \n from the input string
puts 'Your First Name?'
first_name=gets.chomp
p first_name
puts 'Your Last Name?'
last_name=gets.chomp
p last_name

puts first_name +' ' + last_name

# Few Rules regarding naming convention

# In Ruby we use snake_case, because we try to avoid capital letters as it can be treated as constand
# We can use alphanumeric character
# but alphabet must be used before numbers

a1=1
puts a1 # this is fine
# 1a= 2
# puts 1a # this will throw an error and will not work

#  👆🏻Variable name cannot begin with numbers
# 👇🏻Using underscore is fine
a_1= 'Working variable'
puts a_1



Variable_with_capital_letter=5
Variable_with_capital_letter=6

# variable begining with capital letter is considered constant for ruby


# snake_case_is_an_ideal_way_of_naming_variables 👈🏻 because it is readable

# Variable name should be meaningful as it is a good programming practice.



x=1
y=x
# https://robertheaton.com/2014/07/22/is-ruby-pass-by-reference-or-pass-by-value/

puts y
puts x
x=2
puts y
puts x

Everything in Ruby is an object


# Duck Typing: That means we dont have to specify type of variable while we are creating it.
# If it looks like a duck, wlaks like a duck and quacks like a duck then it maust be a duck
1.class # Integer
'abc'.class #String
true.class #

#  Any value in double quote or single quote is a string in a ruby

my_first_string= 'Hello there!'
my_second_string= "How are you?"
puts my_first_string
puts my_second_string

# String interpolation only works with double quote
name='Naveed'
puts "My name is #{name}"

# Scape sequence works with single quote

my_new_string='I \'m a string'
# \n \ is a escape sequence
puts my_new_string

# Mutable or Immutable String Objects


#String are mutable in ruby

2.5.1 :001 > s="foo"
 => "foo" 
2.5.1 :002 > s.object_id
 => 70287148861760 
2.5.1 :003 > s << 'bar'
 => "foobar" 
2.5.1 :004 > s.object_id
 => 70287148861760 
2.5.1 :005 > s += 'xxx'
 => "foobarxxx" 
2.5.1 :006 > s.object_id
 => 70287160928280


puts "What is your name?"
name=gets.chomp
puts name.capitalize
puts name.upcase
puts name.downcase
puts name.reverse

puts "NaVeEd".swapcase

puts "Hellllll0 mmmyyy nammme isss".squeeze

str= "My name is Naveed and your name is Bob"

puts str.sub("name","title")
puts str.gsub("name","title")



# Number and Maths

# Inter and Float

1
10
100
num = 100_300 # Ruby  will '_' in number
puts num
num_1=100_300_000_000
puts num_1

puts 1.to_f
puts 2.59.to_i


a=5
b=10

puts a + b
puts a - b
puts a.to_f / b.to_f
puts a * b
puts 3 % 2
puts 2 % 2
puts 2**2

# Exercise
c= 3**a
puts c


puts 'Number 1?'
num_1=gets.chomp.to_i
p num_1
puts 'Number 2?'
num_2=gets.chomp.to_i
p num_2
puts num_1*num_2


# Logical Operator
# In ruby we have true and false
# Class of true is TrueClass and false is FalseClass
# WIth the help of logical operators we get normally true and false

# && == And Operator
true && true #=> true
false && true #=> false
true && false #=> false

# || == Or Operator

true || true #=> true
false || true #=> true
true || false #=> true
false || false #=> false

#   > Greater than
#   < Less than
#  >= Greater than equals to
#  <= Less than Equals to

2.5.1 :001 > 1>2
 => false 
2.5.1 :002 > 1<2
 => true 
2.5.1 :003 > 1>=2
 => false 
2.5.1 :004 > 1<=2
 => true 
2.5.1 :005 > 



if 2<1
    puts 'I am in if block'
elsif 3>2
    puts 'I am in elsif block'
else
    puts 'I am in else block, This is a default condition'
end


temp = 9

# if temp < 10
#     puts 'It is cold'
# end

# Inline condition
#  if 👈🏻 with if
puts 'It is cold' if temp <10

# unless 
puts 'It is cold' unless temp>=10



x = 1
while x<=100
    puts x
    x +=1
end

x = 50
while x>=1
    puts x
    x -=1
end

z = 1
count = 0
while z<=100
    puts z if (z % 2 == 1)
    z +=1
    count +=1
    break if count>= 60 
end



#  Nil
a=nil
puts a
=end
10.times {
    puts "Hello CodeCore"
}
# is_a?
# Returns true if class is the class of obj, or if class is one of the superclasses of obj or modules included in obj.
# 2.5.1 :001 > 1.is_a? Integer
#  => true 
# 2.5.1 :002 > 1.is_a? String
#  => false 
# 2.5.1 :003 > "asd".is_a? String
#  => true 
# 2.5.1 :004 > "asd".is_a? Integer
#  => false 
# 2.5.1 :005 > 