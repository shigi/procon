use std::collections::HashMap;
use proconio::input;

fn main() {
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let b = "abcdefghijklmnopqrstuvwxyz";
    let mut h = HashMap::new();
    for i in 0..26 {
        h.insert(a.chars().nth(i).unwrap(), b.chars().nth(i).unwrap());
        h.insert(b.chars().nth(i).unwrap(), a.chars().nth(i).unwrap());
    }

    input!(
        s: String,
    );

    let mut ans = String::from("");
    for c in s.chars() {
        ans.push(h[&c]);
    }

    println!("{}", ans);
}
