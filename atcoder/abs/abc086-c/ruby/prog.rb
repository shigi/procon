n = gets.to_i

ct = cx = cy = 0
n.times do
  t, x, y = gets.split(/\s+/).map(&:to_i)
  if t - ct < (x - cx).abs + (y - cy).abs || t % 2 != (x + y) % 2
    console.log("No")
    exit
  end
  ct, cx, cy = t, x, y
end

console.log("Yes")
