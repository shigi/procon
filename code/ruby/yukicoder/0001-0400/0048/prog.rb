def check_end(x, y, c)
  if x == 0 and y == 0
    puts c
    exit
  end
end

x = gets.chomp.to_i
y = gets.chomp.to_i
l = gets.chomp.to_i

c = 0
check_end(x, y, c)

if y > 0
  c += (y + l - 1) / l
  y = 0
end

check_end(x, y, c)
c += 1

x = -x if x < 0
if x > 0
  c += (x + l - 1) / l
  x = 0
end

check_end(x, y, c)
c += 1

if y < 0
  c += (-y + l - 1) / l
  y = 0
end
puts c
