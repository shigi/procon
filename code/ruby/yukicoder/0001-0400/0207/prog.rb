a, b = gets.split(/\s+/).map(&:to_i)
(a..b).each do |i|
  puts i if i % 3 == 0 or i.to_s.include?("3")
end
