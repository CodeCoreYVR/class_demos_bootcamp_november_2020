=begin
# Creating Array in a Ruby

my_array=[] # creating an array =>[]
my_array_1=Array.new #=> []
my_array_2=Array.new(2) #=> [nil,nil]


# Accessing Elements of an array

array=[1,"hi","hello"]
array[0] #=> 1
array[1] #=> "hi"
array[-1] #=> "hello"
array[-2] #=> "hi"

a=[[1,2,3],true,"Hey","Drew"]
a[2] 
#or 
a[-2]


# Multi Dimensional Arrays

array_1=[[1,2,3],[1,2,3],[1,2,3],[1,2,3]]
array_1[2] #=> [1,2,3]
array_1[2][2] # => 3
array_1[2][1] # => 2


#  Addinge elements to an array
#  we can do it by 2 ways
# 1. push
# 2. << Shovel operator 

array=[1, "hi", "hello", "John"]
array.push('John') #=>[1, "hi", "hello", "John"]
array << 'Doe' #=> [1, "hi", "hello", "John", "Doe"] 

# .include? is used to check if the element is in array or not. it will return boolean(true or false)
array.include?(1) #=> true


# To find number of elements in an array we use following method
array=[1, "hi", "hello", "John", "Doe"] 
array.length
array.size
array.count

# Find an array method to turn a multi-dimensional array into a one dimensional array
array_1=[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]] array_1.flatten(1) # argument is used to define an extent of level that we want to flatten


array=[1, "hi", "hello", "John", "Doe"] 
array.shift #=> 1 # it will remove element from the begning
array.unshift(1) #=> 1 # it will add element at the begning



# 
# Converting string into an array

word = 'Hello codecore student'.split(' ')
# converting array to string 

words.join(' ')

# Method 1
words=["Hello", "codecore", "student"]
words= words[1],words[2],words[0]

# Method 2
num=[4,5,6,7]
num[0],num[3]=num[3],num[0] #=> [7, 5, 6, 4] # Be carefull about the index 


num_1=[1,2,3,4,5]

# Iterating over an array using a for loop
# for val in num_1
#     puts val
# end
# Exercise : Squared of elements
num_1.each do |x|
    # puts x
    puts x**2
end

# Printing MultiDimensional Arrays
mul_array=[[1,7,3],[4,4,6],[7,2,9]]

mul_array.each do |sub_array|
    sub_array.each do |val|
        print (val*val).to_s + " "
    end
end


map_array=[1,2,3,4,5]

new_mapped_array=map_array.map do |x|
    x*x
end
p new_mapped_array
p map_array

=end