=begin
# Methods

# 👇🏻 Syntax for writing a method 
# This is also known as method declaration
# def method_name(arg1, arg2)
#     arg1 * arg2 👈🏻 to return something last line of 
#                   a method returns implicitly
# end
# 👆🏻 method scope ends with 'end'

# 👇🏻Syntax for method call
# method_name(<passed_argument2>,<passed_argument2>)

# Example / Demo
def multiply(a,b)
    a*b
end

puts multiply(4,5)

# Conventions for writing a methods
# 1. Never use capital letter for method name. otherwise ruby will consider it as a constant
# Method ending with ? returns bolean (true/ false). But this is just a convention
# ! if this is used it means it will mutate the object itseld or for some serious action.

def by_five?(num)
    num%5==0
end

puts by_five?(10)
puts by_five?(7)


def what_is_it(thing)
    if[String,Integer,Array].include?(thing.class)
        thing.class.to_s
    else
        "something else"
    end
end

# puts what_is_it(1) or 👇🏻
# puts what_is_it 1
# puts what_is_it 1.2
# puts what_is_it [1,2,3,4]
# puts what_is_it "Hello"



def by_five?(num)
    return num%5==0
    puts 'Hi'
end

puts by_five?(10)


def multiply(a=6,b=7)
    a*b
end

puts multiply 5


# Variadic Methods
# Defination: The method that can take any number of arguments
# Syntax: * called splat can be used to gather multiple arguments into a varaible
# They store values in arrays

# def sample(*nums)
#     puts "number of arguments passed #{nums.length}"
#     for i in 0...nums.length
#         puts "The Parameter are #{nums[i]}"
#     end
# end

# sample "Zara",6,'F'

def sample(name,age, *nums)
    puts "name:#{name}"
    puts "age:#{age}"
    puts "number of arguments passed #{nums.length}"
    for i in 0...nums.length
        puts "The Parameter are #{nums[i]}"
    end
end

sample "Zara",6,'F','KG','Father'



def minimum(*nums)
    nums.reduce do |curr_min,num|
        puts "curr_min:#{curr_min}"
        puts "num:#{num}"
        if curr_min>num
            num
        else
            curr_min
        end

    end
end

puts minimum(5,6,4,3,2,1)


#  Blocks

#  They are simillar to anonymous function that can be passed to methods

# All method can take a block as an argument and only one block at a time

# Blocks are enclosed in do/ end statement or curly braces {}
# They can have multiple arguments. The names of the arguments are defined between two pipes character ||

# [1,2,3].each do |num|
#     puts num
# end

[1,2,3].each { |num|
    puts num
}


# yield
# To execute a block that's been passes to a method, use the "yield" keyword. This is like calling a block

#  yield will return last expression from the block

# Example
def print_once
    puts 'Before yield'
    yield
    puts 'After yield'
end

print_once{puts 'This is from a block'}


def my_method
    x=15
    yield(x) if block_given?
    puts "Bye"
end

my_method{|my_var|
puts "I received #{my_var} from method."
}


#  Exercise: Implementing each

def each(arr)
    for val in arr
        return 'no block given' unless block_given?
        result = yield(val)
        puts "#{result}"
    end
end

# puts each([1,2,3,4,5])
each([1,2,3,4,5]){|x| x*5 }


#  Exercise: Implementing filter


def filter(arr)
    new_array=[]
    for val in arr
        return "no block given" unless block_given?
        if yield(val)
            new_array<<val
        end
    end
    puts "Output: #{new_array}"
    new_array
end
puts filter [1,2,3,4]
filter([1,2,3,4]){|x| x.even? }

#  Exercise: Implementing map

def map(arr)
    output=[]
    for val in arr
        return "no block given" unless block_given?
        output<< yield(val)
    end
    output
end
puts map([1,2,3,4])
p map([1,2,3,4]){|x| x*5 }


def print_twice
    puts 'Before yield'
    yield
    yield
    yield
    yield
    puts 'After yield'
end

print_twice{puts 'I am from block'}



# Lambda

# A lambda is a way to define blocks and its paramete with some special syntax

# syntax 1

say_something=lambda{puts 'this is a lambda'}
# or 
# syntax 2

say_something_2=->{puts 'This is a lambda as well'}

# .call method is used for calling lambda
say_something.call

say_something_2.call

# passing argument to lambda with '->'
# times_two=->(x){x*2}

# puts times_two.call(10)
# OR

# passing argument to lambda with 'lambda'

times_two=lambda{|x| x*2}

# puts times_two.call(10)

def my_method(code)
    puts "----#{code.class}------"
    puts "Hey you!"
    puts code.call(2)
    puts "hello"
end

my_method(times_two)

# ->{}
# lambda{}
# Proc.new{}

# times_two=lambda{|x| x*2}

# puts times_two.call

# Proc doesn't care about the arguments while lambda need arguments otherwise they will through error
t=Proc.new{|x,y| puts "I dont care about arguments"}
t.call

def my_method(code)
    puts "----#{code.class}------"
    puts "Hey you!"
    puts code.call(2)
    puts "hello"
end

my_proc=Proc.new{|x| puts "I am from proc"
return
}
my_method(my_proc)

# Proc returns from the current methoc while lambdas return from lambdas itself


# Lambda as a block
# Example

def map(arr)
    output=[]
    for val in arr
        return "no block given" unless block_given?
        output<< yield(val)
    end
    output
end

power_2=->(x){ x**2 }

p map([1,2,3,4],&power_2)





# def write(file, data,mode)
# end

# write(data_from,file_name,mode_r)

# def write(file:, data:, mode:"ascii")

# end

# write(data: data_from,file: 'test.txt')

def my_method(a:,b:)
    puts "A is #{a}"
    puts "B is #{b}"
end

my_method(b:7,a:5)
=end

def my_method(a,b, hash)
    puts "A is #{a}"
    puts "B is #{b}"
    puts "hash is #{hash}"
end

# my_method(4,5,{a:1, b:6})
# my_method 4,5,{a:1, b:6}
my_method 4,5,a:1, b:6