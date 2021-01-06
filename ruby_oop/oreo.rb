require "./cookie.rb"
class Oreo < Cookie
    attr_accessor :filling_type
    def initialize(sugar,flour, filling_type='Pure White Sugar')
        super(sugar,flour)
        @filling_type=filling_type
    end
    def eat # Method Overloading or Overiding
        puts 'split in half'
        puts 'now eat it'
        super
    end
    def eat_oreo
        'I ate Oreo'
    end
end


c_oreo=Oreo.new(50, 100)
puts c_oreo.sugar
puts c_oreo.filling_type
c_oreo.sugar=60
puts c_oreo.sugar
puts c_oreo.flour
puts c_oreo.filling_type
puts c_oreo.sugar
c_oreo.eat
puts c_oreo.eat_oreo

c_oreo.eat

puts Oreo.info


