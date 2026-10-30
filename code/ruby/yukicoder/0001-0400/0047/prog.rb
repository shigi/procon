n = gets.to_i
c = 0

while n > 1
  if n % 2 == 0
    n = n / 2
  else
    n = (n - 1) / 2 + 1
  end
  c += 1
end

puts c
