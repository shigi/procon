n = gets.to_i
mounts = Array.new(n) {
  name, height = gets.split(/\s+/)
  { name: name, height: height.to_i }
}.sort { |a, b| b[:height] <=> a[:height] }

puts mounts[1][:name]
