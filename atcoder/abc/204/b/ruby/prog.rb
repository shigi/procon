n = gets.chomp.to_i
a = gets.chomp.split(/\s+/).map(&:to_i)

r = 0
a.each do |ai|
  r += ai - 10 if ai > 10
end

puts r
