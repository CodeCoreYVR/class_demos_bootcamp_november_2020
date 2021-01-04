words=[['john', 'steve', 'jen'],  
['ate', 'sat on', 'bought'],  
['an apple', 'the couch', 'a toothbrush']]

sentence=words.map do |word|
    word.sample
end.join(' ')
puts sentence