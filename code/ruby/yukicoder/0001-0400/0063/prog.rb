l, k = gets.split(/\s+/).map(&:to_i)
if l % (k * 2) == 0
  puts (l / (k * 2) - 1) * k
else
  puts (l / (k * 2)) * k
end
