require "./cookie.rb"
class CookieJar
    def initialize(capacity=10)
        @capacity=capacity
        @cookies=[]
    end
    def add_cookie(cookie)
        unless cookie.is_a? Cookie
            raise ArgumentError.new("Must be a Cookie")
        end
        if @cookies.length >= @capacity
            puts 'You have too many cookies in here'
        else
            @cookies.push(cookie)
        end
        self
    end
    def take_cookie
        @cookies.pop
    end
    def details
        puts "This jar has #{@cookies.length} cookies in it"
        puts "Here are the details regarding cookies:"
        puts @cookies.map{|cookie| " Cookies w/#{cookie.flour} cups flour and #{cookie.sugar} cups sugar"}.join(", ")
    end

end

cj=CookieJar.new(5)

cj.add_cookie(Cookie.new(10,20))
.add_cookie(Cookie.new(5,15))
.add_cookie(Cookie.new(5,15))
.add_cookie(Cookie.new(5,15))
.add_cookie(Cookie.new(5,15))
cj.details

cj.take_cookie
cj.details