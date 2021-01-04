provinces_of_canada={
    "BC" => "Victoria",
    "ON"=>"Torronto",
    "MN" => "Winnipeg"
}

# provinces_of_canada.each do |province, capital|
#     puts "#{province}- #{capital}"
# end

provinces_of_canada.each_key do |k|
    puts "#{k}- #{provinces_of_canada[k]}"
end

provinces_of_canada.each_value { |v|
    puts v
}