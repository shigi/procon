l = gets.to_i
n = gets.to_i
w = gets.split(/\s+/).map(&:to_i).sort

used = len = 0
while used < n && len < l
  len += w[used]
  break if len > l
  used += 1
end

puts used
