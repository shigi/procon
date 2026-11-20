use proconio::input;

fn main() {
    input!(s: String);

    let mut r: i32 = 0;
    for i in 0000..=9999 {
        let t = format!("{:0>4}", i);
        let mut failed = false;
        for j in 0..=9 {
            let sj = s.chars().nth(j);
            if sj == Some('o') {
                if t.find(&j.to_string()).is_none() {
                    failed = true;
                }
            } else if sj == Some('x') {
                if t.find(&j.to_string()).is_some() {
                    failed = true;
                }
            } else if sj == Some('?') {
                // ok
            }
        }
        if !failed {
            r += 1;
        }
    }

    println!("{}", r);
}
