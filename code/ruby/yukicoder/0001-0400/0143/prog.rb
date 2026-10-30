k, n, f = gets.split(/\s+/).map(&:to_i)
a = gets.split(/\s+/).map(&:to_i)

t = a.sum
if k * n >= t
  puts k * n - t
else
  puts -1
end
