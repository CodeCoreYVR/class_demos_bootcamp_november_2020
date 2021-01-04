array=[[2,3,4],[5,6,7],[6,7,8]]
squared_array=[]
array.each {|sub_array|
    squared_sub_array=[]
    sub_array.each {|element|
        squared_sub_array << element**2
    }
    squared_array<<squared_sub_array
}

p squared_array