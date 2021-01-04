names=[]
while name = gets.chomp
    if name =='exit'
        break
    else
        names << name.capitalize!
    end
end
p names