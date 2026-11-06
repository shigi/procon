a, b, c = gets.chomp.split(/\s+/).map(&:to_i)

if a == b
  puts c
elsif b == c
  puts a
elsif c == a
  puts b
else
  puts 0
end
