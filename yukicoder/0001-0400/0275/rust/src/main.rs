use proconio::input;

fn main() {
    input!(n: i32);
    input!(mut a: [i32;n]);
    a.sort();

    let h = n / 2;
    if n % 2 == 0 {
        println!("{}", (a[(h-1) as usize] + a[h as usize]) as f32 / 2.0);
    } else {
        println!("{}", a[h as usize]);
    }
}
