require 'date'

c = 0
(Date.new(2015, 1, 1)..Date.new(2015, 12, 31)).each do |date|
  c += 1 if date.month == date.day / 10 + date.day % 10
end

puts c
