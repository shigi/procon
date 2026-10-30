import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n");
    let l = parseInt(lines[0]);
    let m = parseInt(lines[1]);
    let n = parseInt(lines[2]);

    m += Math.floor(n / 25); n %= 25;
    l += Math.floor(m /  4); m %=  4;
    l %= 10;

    console.log(l + m + n);
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
