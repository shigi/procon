use proconio::input;

fn main() {
    input!(a: i32, b: i32);
    for i in a..=b {
        if i % 3 == 0 || i.to_string().find('3') != None {
            println!("{}", i);
        }
    }
}
