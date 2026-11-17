use proconio::input;

fn main() {
    input!(a: String);
    input!(b: String);

    let mut a2: Vec<char> = a.chars().collect();
    let mut b2: Vec<char> = b.chars().collect();
    a2.sort_unstable();
    b2.sort_unstable();
    if a2 == b2 {
        println!("YES");
    } else {
        println!("NO");
    }
}
