n, y = gets.chomp.split(/\s+/).map(&:to_i)

(0..n).each do |i|
  (0..n).each do |j|
    k = n - i - j
    next if k < 0
    if i * 10000 + j * 5000 + k * 1000 == y
      puts "%d %d %d" % [i, j, k]
      exit
    end
  end
end

puts "%d %d %d" % [-1, -1, -1]
