n = gets.chomp.to_i
d = Array.new(n) { gets.chomp.to_i }

puts d.uniq.size
