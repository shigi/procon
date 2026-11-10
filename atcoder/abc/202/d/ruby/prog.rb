a, b, k = gets.chomp.split(/\s+/).map(&:to_i)
n = a + b

Fact = Array.new(n + 1)
Fact[0] = 1
(1..n).each do |i|
  Fact[i] = Fact[i-1] * i
end

def ncr(n, r)
  Fact[n] / Fact[r] / Fact[n-r]
end

ans = ""
while a + b > 0
  if a > 0
    c = ncr(a-1+b, a-1)
    if k <= c
      ans += 'a'
      a -= 1
    else
      ans += 'b'
      b -= 1
      k -= c
    end
  else
    ans += 'b'
    b -= 1
  end
end

puts ans
