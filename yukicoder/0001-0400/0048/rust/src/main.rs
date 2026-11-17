use std::process::exit;
use proconio::input;

fn check_end(x: i32, y: i32, c: i32) {
    if x == 0 && y == 0 {
        println!("{}", c);
        exit(0);
    }
}

fn main() {
    input!(mut x: i32);
    input!(mut y: i32);
    input!(l: i32);

    let mut c = 0;
    check_end(x, y, c);

    if y > 0 {
        c += (y + l - 1) / l;
        y = 0;
    }

    check_end(x, y, c);
    c += 1;

    if x < 0 {
        x = -x;
    }
    if x > 0 {
        c += (x + l - 1) / l;
        x = 0;
    }

    check_end(x, y, c);
    c += 1;

    if y < 0 {
        c += (-y + l - 1) / l;
    }

    println!("{}", c);
}
