cities={
    'BC'=>['Vancouver','Richmond'],
    'AB'=>['Edmonton','Calgary']
}

cities.each {|key,values|
    puts "#{key}:#{values.join(', ')} "
}