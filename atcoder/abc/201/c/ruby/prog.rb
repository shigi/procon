s = gets.chomp

r = 0
(0000..9999).each do |i|
  t = "%04d" % i
  failed = false
  (0..9).each do |j|
    case s[j]
    when 'o'
      failed = true if t.count(j.to_s) == 0
    when 'x'
      failed = true if t.count(j.to_s) > 0
    when '?'
      # ok
    end
  end
  r += 1 unless failed
end

puts r
