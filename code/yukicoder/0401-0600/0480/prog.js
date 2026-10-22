import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n");
    const n = parseInt(lines[0]);
    console.log(n * (n + 1) / 2);
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
