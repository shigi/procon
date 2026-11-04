n = gets.to_i
logged_in = false

failed = 0
(1..n).each do |i|
  s = gets.chomp
  case s
  when "login"
    logged_in = true
  when "logout"
    logged_in = false
  when "public"
    # always OK
  when "private"
    failed += 1 unless logged_in
  end
end

puts failed
