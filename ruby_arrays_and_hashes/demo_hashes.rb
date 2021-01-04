=begin
# Hashes
#  Creating Hashes
my_hash={} #=> {}
my_hash_1=Hash.new #=>{}
my_hash_2=Hash.new(0) #=>{}


# WE can create hash easily with its 👇🏻 implicit form
me = {
    "name" => "Naveed",
    "place" => "Richmond",
    "Company"=> "CodeCore"
}

#  '=>' This is know as hash rocket 

movie_with_director={
    "Forrest Gump" => "Robert Zemeckis",
    "The Matrix" => "The Watchowskis",
    "Pulp Fiction" => "Quintin Tarantino"
}

# Accessing Values form hashes

me["name"] # => "Naveed" 
me["place"] # => "Richmond"
# Accessing all keys of hash
me.keys #=> ["name", "place", "Company"] 
# Accessing all values of hash
me.values# => ["Naveed", "Richmond", "CodeCore"] 

me = {
    "name" => "Naveed",
    "place" => "Richmond",
    "Company"=> "CodeCore"
}


me.each do |key, value|
    puts "#{key} - #{value}"
end



my_hash = {
    'abc'=> [1,2,3],
    "xyz"=>[4,5]
}

my_array=["abc",{'a'=>1, 'b'=> 2}, false]
=end

# Symbols
# They are simillar to string 
# They are immutable and are ptactical data structure for text
# Old symbol is reused instead of creating a new symbol

# We use camelCase for symbols
# But snake_case also works
# we cannot spaces in symbols e.g. :i stuff 👈🏻 Invalid symbols
# we can use quotes for creating symbols :"i stuff" 👈🏻 Will work

# course_info={
#     :name => 'CodeCore Bootcamp',
#     :lenght=> '12 weeks',
#     :location=> '626 6th Ave, New Westminster'
# }

course_info_symbol={
    name: 'CodeCore Bootcamp',
    lenght: '12 weeks',
    location: '626 6th Ave, New Westminster'
}

# Exercise:

my_info{
    name:'Naveed',
    age:'35',
    hobbies:["programming","Hiking"]
}