use std::collections::HashMap;
use proconio::input;

fn main() {
    let h = HashMap::from([('0', '0'), ('1', '1'), ('6', '9'), ('8', '8'), ('9', '6')]);

    input!(s: String);
    let t = s.chars().rev();
    let r: String = t.map(|c| h.get(&c).unwrap()).collect::<String>();
    println!("{}", r);
}
