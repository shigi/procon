import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n");
    const [a, b] = lines[0].split(" ").map(t => parseInt(t));
    console.log(Math.floor((b + a - 1) / a));
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
