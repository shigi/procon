n, h, m, t = gets.split(/\s+/).map(&:to_i)
a = ((h * 60 + m) + (n - 1) * t) % 1440
puts a / 60
puts a % 60
