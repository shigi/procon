n = gets.to_i
a = Array.new(n + 1) { n + 1 }
q = [{ dest: 1, walk: 1 }]

until q.empty?
  qi = q.shift
  curr = qi[:dest]
  walk = qi[:walk]
  next if a[curr] <= walk
  a[curr] = walk

  b = curr.to_s(2).count('1')
  q.push({ dest: curr - b, walk: walk + 1 }) if curr - b >= 1
  q.push({ dest: curr + b, walk: walk + 1 }) if curr + b <= n
end

puts a[n] == n + 1 ? -1 : a[n]
