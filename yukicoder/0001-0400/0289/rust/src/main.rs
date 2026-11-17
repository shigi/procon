use proconio::input;

fn main() {
    input!(s: String);

    let mut sum = 0;
    for si in s.chars() {
        if si >= '1' && si <= '9' {
            sum += si.to_digit(10).unwrap();
        }
    }

    println!("{}", sum);
}
