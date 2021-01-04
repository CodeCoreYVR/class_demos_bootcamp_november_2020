arr = Array(1..100)

arr[30] = 13

# Solution using arrays
arr.sort!

arr.each.with_index do |num, i|
    if num == arr[i + 1]
        p "Found the repeated number"
        puts num 
        break 
    end
end