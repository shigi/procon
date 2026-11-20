use proconio::input;

fn main() {
    input!(mut a: [i32; 3]);
    a.sort();
    if a[2] - a[1] == a[1] - a[0] {
        println!("Yes");
    } else {
        println!("No");
    }
}
