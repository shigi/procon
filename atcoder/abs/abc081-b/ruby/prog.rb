n = gets.chomp.to_i
a = gets.chomp.split(/\s+/).map(&:to_i)

c = 0
while a.all? { |ai| ai % 2 == 0 }
  a.each_index do |i|
    a[i] = a[i] / 2
  end
  c += 1
end

puts c
