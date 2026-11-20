use proconio::input;

struct Mount {
    name: String,
    height: i32,
}

fn main() {
    input!(n: i32);

    let mut mounts: Vec<Mount> = vec![];
    for _i in 0..n {
        input!(name: String, height: i32);
        mounts.push(Mount { name, height });
    }
    mounts.sort_by(|a, b| b.height.cmp(&a.height));
    println!("{}", mounts[1].name);
}
