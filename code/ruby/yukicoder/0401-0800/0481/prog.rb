a = [false] * 11
b = gets.split(/\s+/).map(&:to_i)
b.each do |bi|
  a[bi] = true
end

(1..10).each do |i|
  if !a[i]
    puts i
    return
  end
end
