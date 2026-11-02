s = gets.chomp

sum = 0
s.chars.each do |si|
  sum += si.to_i if si >= "1" && si <= "9"
end

puts sum
