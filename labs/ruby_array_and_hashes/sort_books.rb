puts "Please enter your favourite book?"
book_name = []
while book = gets.chomp
  if book == "exit"
    break
  else
    book_name << book.capitalize
  end
end

p book_name.sort
