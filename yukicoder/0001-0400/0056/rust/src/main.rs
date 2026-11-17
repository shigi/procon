use proconio::input;

fn main() {
    input!(
        d: i32,
        p: i32,
    );

    println!("{}", (d * 100 + d * p) / 100);
}
