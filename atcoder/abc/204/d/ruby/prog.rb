n = gets.to_i
t = gets.split(/\s+/).map(&:to_i)

s = t.sum
dp = Array.new(n + 1) { Array.new(s + 1) { false } }
dp[0][0] = true

(1..n).each do |i|
  (0..s).each do |j|
    if j >= t[i-1]
      dp[i][j] = dp[i-1][j-t[i-1]] | dp[i-1][j]
    else
      dp[i][j] = dp[i-1][j]
    end
  end
end

(((s+1)/2)..s).each do |j|
  if dp[n][j]
    puts j
    exit
  end
end
