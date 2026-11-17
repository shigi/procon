use proconio::input;

fn main() {
    let mut a = [false; 11];
    input!(b: [i32; 9]);
    for bi in b {
        a[bi as usize] = true
    }

    for i in 1..10 {
        if !a[i] {
            println!("{}", i);
        }
    }
}
