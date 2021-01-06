class Rectangle
  attr_accessor :width, :height

  def initialize(width = 0, height = 0)
    @width = width
    @height = height
  end

  def area
    width * height
  end

  def is_square?
    width == height
  end
end
rect=Rectangle.new(4,5)
puts rect.width
puts rect.height
rect.width=4
rect.height=4
puts rect.area
puts rect.is_square?
