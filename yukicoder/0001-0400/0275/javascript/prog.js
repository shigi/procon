import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n");
    const n = parseInt(lines[0]);
    const a = lines[1].split(" ").map(t => parseInt(t));
    a.sort((a, b) => a - b);

    const n2 = Math.floor(n/2);
    if (n % 2 == 0) {
        console.log((a[n2-1] + a[n2]) / 2);
    } else {
        console.log(a[n2]);
    }
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
