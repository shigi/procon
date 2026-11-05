n = gets.chomp.to_i
a = gets.chomp.split(/\s+/).map(&:to_i).sort.reverse

s = t = 0
a.each_with_index do |ai, i|
  if i % 2 == 0
    s += ai
  else
    t += ai
  end
end

puts s - t
