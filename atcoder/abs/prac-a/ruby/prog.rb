a = gets.chomp.to_i
b, c = gets.chomp.split(/\s+/).map(&:to_i)
s = gets.chomp

print a + b + c, " ", s, "\n"
