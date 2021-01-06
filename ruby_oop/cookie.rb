
# Convention: Always begin the name of a class with capital letter
# class is a keyword use to declare class and it's scope end with keyword 'end'
# Use CamelCase for the name of a class
class Cookie
    def initialize(sugar,flour)
        # puts 'This is from initialize method'
        
        # - instance variables are variables  
        # instances methods of your class have access to. # They're unique to an instance.

        @sugar=sugar
        @flour=flour
        @@color="Brown" #👈🏻This is how we create a class variable
    end
    attr_accessor :sugar
    attr_accessor :flour
    # attr_reader :sugar
    # def sugar # this is a getter method which will return a value of sugar instance variable
    #     @sugar
    # end
    # attr_writer :sugar
    # def sugar=(new_sugar)
    #     @sugar=new_sugar
    # end
    # def flour
    #     @flour
    # end

    def details
        "sugar: #{@sugar} | flour: #{@flour}"
    end
    def color
        @@color
    end
    def bake_n_eat
        puts bake
        # eat
    end
    # Public methods can be invked / used within the class and outside the class as well
    def eat
        puts 'Nom. Nom. Nom!'
        self # 👈🏻To chain isntance method we are returning 'self' here , which will point to instance of a class(not a class)
    end

    # Class Method
    def self.info
        "Cookies are essential to a balanced diet"
    end
    
    private #👈🏻All private method comes after this 'private' keyword
    # The private method can only be invoked / used within the class
    # Trying to call private method outside the class will throw an error

    def bake
        "baking the cookie"
    end

end



=begin
# Creating Instance of a class
# We use .new
# c=Cookie.new(10,15)
# puts c.details
healthy_cookie=Cookie.new(1,10)
regular_cookie=Cookie.new(10,15)
puts healthy_cookie.sugar
healthy_cookie.sugar=3
sugar_from_healthy_cookie=healthy_cookie.sugar
puts sugar_from_healthy_cookie
puts healthy_cookie.details
puts regular_cookie.details

puts healthy_cookie.color
puts regular_cookie.color


# c1=Cookie.new
# c2=Cookie.new
# puts c.object_id
# puts c1.object_id
# puts c2.object_id
# puts c.bake
# c.eat.bake_n_eat
# puts c.bake_n_eat
# puts c.info # 👈🏻This will through error because info is a calss method
# puts c1.bake
# puts c1.eat
# puts c2.bake
# puts c2.eat

puts Cookie.info
=end