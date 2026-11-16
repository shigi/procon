fn main() {
    let days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let mut count = 0;
    for month in 1..12 {
        for day in 1..days[month] {
            if month == day / 10 + day % 10 {
                count += 1;
            }
        }
    }
    println!("{}", count)
}
