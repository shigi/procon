use proconio::input;

fn main() {
    input!(
        n: i32,
        a: [u64; n],
    );

    let mut sum: u64 = 0;
    for ai in a {
        sum += ai;
    }

    println!("{}", sum);
}
