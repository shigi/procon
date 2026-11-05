a = gets.chomp.to_i
b = gets.chomp.to_i
c = gets.chomp.to_i
x = gets.chomp.to_i

t = 0
(0..a).each do |na|
  (0..b).each do |nb|
    (0..c).each do |nc|
      t += 1 if na*500 + nb*100 + nc*50 == x
    end
  end
end

puts t
