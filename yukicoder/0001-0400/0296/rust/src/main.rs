use proconio::input;

fn main() {
    input!(n: i32, h: i32, m: i32, t: i32);
    let a = ((h * 60 + m) + (n - 1) * t) % 1440;
    println!("{}", a / 60);
    println!("{}", a % 60);
}
