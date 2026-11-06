n, k = gets.chomp.split(/\s+/).map(&:to_i)

friends = (1..n).map {
  a, b = gets.split(/\s+/).map(&:to_i)
  { a: a, b: b }
}.sort { |s, t| s[:a] <=> t[:a] }

friends.push({ a: 10 ** 18 + 1, b: 0 })

p = 0
m = k
i = 0

while m > 0
  p += m
  m = 0
  while friends[i][:a] <= p
    m += friends[i][:b]
    i += 1
  end
end

puts p
