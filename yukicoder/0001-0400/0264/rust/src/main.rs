use proconio::input;

fn main() {
    let a = [
        ["Drew", "Won" , "Lost"],
        ["Lost", "Drew", "Won" ],
        ["Won" , "Lost", "Drew"]
    ];

    input!(n: i32, k: i32);
    println!("{}", a[n as usize][k as usize]);
}
