class Car
    attr_accessor :model, :type, :capacity
    def initialize(model, type="Sedan", capacity=4)
        unless model.is_a? String
            raise ArgumentError.new("model must be string")
        end
        @model=model
        @type=type
        @capacity=capacity
    end
    def details
        "model: #{@model}, type: #{@type}, capacity: #{@capacity}"
    end
    def drive
        ingnite_engine
        puts  "Vroom Vroom"
    end
    def stop
        puts 'Screeeeech'
    end
    def park
        puts 'zzzzzz'
    end
    def self.max_speed
        200
    end

    private

    def pump_gas
        puts 'glug glug'
    end
    def ingnite_engine
        puts "🚗 🔥🔥🔥"
    end
end

car_1=Car.new('Civic')
puts car_1.details
car_1.stop
puts car_1.type
puts car_1.model
puts car_1.capacity
car_1.capacity=5
puts car_1.capacity

# car_2=Car.new(4) 👈🏻 This will raise an ArgumentError
# car_2.drive