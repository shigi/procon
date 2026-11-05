def sumd(x)
  r = 0
  while x > 0
    r += x % 10
    x = x / 10
  end
  r
end

n, a, b = gets.split(/\s+/).map(&:to_i)

s = 0
(1..n).each do |i|
  s += i if (a..b).include?(sumd(i))
end

puts s
