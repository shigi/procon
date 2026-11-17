use proconio::input;

fn main() {
    input!(
        k: i32,
        n: i32,
        f: i32,
    );
    input!(a: [i32; f]);

    let t = a.iter().sum();
    if k * n >= t {
        println!("{}", k * n - t);
    } else {
        println!("{}", -1);
    }
}
