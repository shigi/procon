H = { '0' => '0', '1' => '1', '6' => '9', '8' => '8', '9' => '6' }

s = gets.chomp
t = s.chars.reverse.map {|si| H[si] }.join
puts t
