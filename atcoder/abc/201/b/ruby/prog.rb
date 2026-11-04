n = gets.to_i
mounts = n.times.map {
  name, height = gets.split(/\s+/)
  { name: name, height: height.to_i }
}.sort { |a, b| b[:height] <=> a[:height] }

puts mounts[1][:name]
