n, k = gets.chomp.split(/\s+/).map(&:to_i)

r = 0
(1..n).each do |i|
  (1..k).each do |j|
    r += 100 * i + j
  end
end

puts r
