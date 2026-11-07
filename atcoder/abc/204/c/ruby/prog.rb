n, m = gets.split(/\s+/).map(&:to_i)

roads = Array.new(n+1) { Array.new }
m.times do
  a, b = gets.split(/\s+/).map(&:to_i)
  roads[a].push(b)
end

r = 0
visited = Array.new(n+1) { false }

(1..n).each do |i|
  (1..n).each do |e|
    visited[e] = false
  end

  q = [i]
  while !q.empty?
    e1 = q.shift
    next if visited[e1]
    visited[e1] = true

    roads[e1].each do |e2|
      q.push(e2) if !visited[e2]
    end
  end

  (1..n).each do |v|
    r += 1 if visited[v]
  end
end

puts r
