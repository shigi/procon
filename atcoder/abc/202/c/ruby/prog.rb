n = gets.chomp.to_i
a = [-1] + gets.chomp.split(/\s+/).map(&:to_i)
b = [-1] + gets.chomp.split(/\s+/).map(&:to_i)
c = [-1] + gets.chomp.split(/\s+/).map(&:to_i)

t = Array.new(n + 1) { 0 }
(1..n).each do |i|
  t[a[i]] += 1
end

r = 0
(1..n).each do |j|
  f = b[c[j]]
  r += t[f]
end

puts r
