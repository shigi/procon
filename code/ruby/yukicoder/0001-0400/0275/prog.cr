n = gets.chomp.to_i
a = gets.chomp.split(/\s+/).map(&:to_i)
a.sort!

h = n / 2
if n % 2 == 0
  puts (a[h-1] + a[h]).to_f / 2
else
  puts a[h]
end
