M = 1000000000

n, k = gets.split(/\s+/).map(&:to_i)
a = Array.new(n+1) { 0 }

if n < k
  puts 1
  exit
end

(0...k).each do |i|
  a[i] = 1
end

a[k] = k

((k+1)..n).each do |i|
  a[i] = (a[i-1] * 2 - a[i-1-k] + M) % M
end

puts a[n]
