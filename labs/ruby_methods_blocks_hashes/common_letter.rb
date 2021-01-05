def common_letter(string)
  obj = {}
  downcase_string = string.downcase
  # p downcase_string
  arr_string = downcase_string.split("")
  for val in arr_string
    if (val.codepoints[0] >= 97 && val.codepoints[0] <= 122) || (val.codepoints[0] >= 48 && val.codepoints[0] <= 57)
      if obj[val] == nil
        obj[val] = 1
      else
        obj[val] += 1
      end
    end
  end
  max = downcase_string[0]
  obj.each_key do |value|
    if obj[value] > obj[max]
      max = value
    end
  end
  puts max
end

common_letter("AAAAaaaaAsdfnvn!!!!!!!!!!!!!!!!!!!!!!!zzzzzzjdf55555555555")
common_letter("aaaabbc")
common_letter("T a d c g d g d d n")
common_letter("1111 monkeys on the wall") # => "1"
