use proconio::input;

fn main() {
    input!(mut n: i32);
    let mut c = 0;

    while n > 1 {
        if n % 2 == 0 {
            n = n / 2
        } else {
            n = (n - 1) / 2 + 1
        }
        c += 1
    }

    println!("{}", c);
}
