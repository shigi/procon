function main() {
    const days = [-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let a = 0;
    for (let m = 1; m <= 12; ++m) {
        for (let d = 1; d <= days[m]; ++d) {
            if (m == Math.floor(d / 10) + d % 10)
                ++a;
        }
    }
    console.log(a);
}

main();
