use proconio::input;

fn main() {
    input!(n: i32);

    input!(mut a: [i32; n]);
    a.insert(0, -1);
    input!(mut b: [i32; n]);
    b.insert(0, -1);
    input!(mut c: [i32; n]);
    c.insert(0, -1);

    let mut t: Vec<i32> = Vec::with_capacity((n+1) as usize);
    for _i in 0..=n {
        t.push(0);
    }

    for i in 1..=n {
        t[a[i as usize] as usize] += 1;
    }

    let mut r: i64 = 0;
    for j in 1..=n {
        let f = b[c[j as usize] as usize];
        r += t[f as usize] as i64;
    }

    println!("{}", r);
}
