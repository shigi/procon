import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n");
    const n = parseInt(lines[0]);
    const a = lines[1].split(" ").map(t => BigInt(t));

    let sum = BigInt(0);
    for (let i = 0; i < n; ++i) {
        sum += a[i];
    }
    console.log(sum.toString());
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
