use std::collections::VecDeque;
use proconio::input;

struct Dat {
    dest: i32,
    walk: i32,
}

fn main() {
    input!(n: i32);
    let mut a = vec![n + 1; (n + 1) as usize];
    let mut q = VecDeque::from([Dat { dest: 1, walk: 1 }]);

    while !q.is_empty() {
        let q1 = q.pop_front().unwrap();
        let curr = q1.dest;
        let walk = q1.walk;
        if a[curr as usize] <= walk {
            continue;
        }
        a[curr as usize] = walk;

        let b = format!("{:b}", curr).matches('1').count() as i32;
        if curr - b >= 1 {
            q.push_back(Dat { dest: curr - b, walk: walk + 1 });
        }
        if curr + b <= n {
            q.push_back(Dat { dest: curr + b, walk: walk + 1 });
        }
    }

    if a[n as usize] == n + 1 {
        println!("{}", -1);
    } else {
        println!("{}", a[n as usize]);
    }
}
