a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
b = "abcdefghijklmnopqrstuvwxyz"
h = {}
(0...26).each do |i|
  h[a[i]] = b[i]
  h[b[i]] = a[i]
end

s = gets.chomp
r = ""
s.chars.each do |c|
  r += h[c]
end

puts r
