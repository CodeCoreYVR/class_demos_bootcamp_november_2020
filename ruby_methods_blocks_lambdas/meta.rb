# define_method
=begin
# def one
#     1
# end

# def two
#     2
# end
# def three
#     3
# end
# def four
#     4
# end

# puts one #=>1
# puts two #=>2
# puts three #=>3
# puts four #=>4

numbers={
    1=>"one",
    2=>"two",
    3=>"three",
    4=>"four"
}


numbers.each do |number, number_name|
    # puts number
    # puts number_name

    define_method(number_name)do
    number
end
end

# puts one #=>1
# puts two #=>2
# puts three #=>3
# puts four #=>4


# define_method('hello_world') do
#     puts 'Hello World'
# end

# hello_world()

# Eval
# The eval method takes a string as an argument and 
# will attempt to evaluate as ruby code
# puts eval("1 + 2 + 3")
puts eval("one + two + three + four")

=end

my_array=["hello","hi","hola"]
my_array.each do |greeting|
    define_method(greeting)do |name|
    "#{greeting} #{name}"
end
end

code ="puts hi('Naveed') 
puts hola('Cheng')
"
eval(code)