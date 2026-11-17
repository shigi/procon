use proconio::input;

fn main() {
    input!(l: i32, k: i32);
    if l % (k * 2) == 0 {
        println!("{}", (l / (k * 2) - 1) * k);
    } else {
        println!("{}", (l / (k * 2)) * k);
    }
}
