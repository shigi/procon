use proconio::input;

fn main() {
    input!(mut l: i32);
    input!(mut m: i32);
    input!(mut n: i32);

    m += n / 25; n %= 25;
    l += m /  4; m %=  4;
    l %= 10;

    println!("{}", l + m + n);
}
