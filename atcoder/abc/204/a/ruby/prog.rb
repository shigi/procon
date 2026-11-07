x, y = gets.chomp.split(/\s+/).map(&:to_i)

if x == y
  puts x
else
  r = [x, y].sort
  if r == [0, 1]
    puts 2
  elsif r == [0, 2]
    puts 1
  elsif r == [1, 2]
    puts 0
  end
end
