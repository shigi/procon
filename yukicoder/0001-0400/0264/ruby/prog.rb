r = [
  %w(Drew Won  Lost),
  %w(Lost Drew Won),
  %w(Won  Lost Drew)
]

n, k = gets.split(/\s+/).map(&:to_i)
puts r[n][k]
