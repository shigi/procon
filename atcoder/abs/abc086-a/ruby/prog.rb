a, b = gets.chomp.split(/\s+/).map(&:to_i)

puts a % 2 == 0 || b % 2 == 0 ? "Even" : "Odd"
