s = gets.chomp

while s.length > 0
  if s.length >= 5 && s[-5..-1] == "dream"
    s = s[0...(s.length - 5)]
  elsif s.length >= 7 && s[-7..-1] == "dreamer"
    s = s[0...(s.length - 7)]
  elsif s.length >= 5 && s[-5..-1] == "erase"
    s = s[0...(s.length - 5)]
  elsif s.length >= 6 && s[-6..-1] == "eraser"
    s = s[0...(s.length - 6)]
  else
    puts "NO"
    exit
  end
end

puts "YES"
