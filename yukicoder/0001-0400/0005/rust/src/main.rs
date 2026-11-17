use proconio::input;

fn main() {
    input!(l: i32);
    input!(n: i32);
    input!(mut w: [i32; n]);
    w.sort();

    let mut used = 0;
    let mut len = 0;
    while used < n && len < l {
        len += w[used as usize];
        if len > l {
            break;
        }
        used += 1;
    }

    println!("{}", used);
}
