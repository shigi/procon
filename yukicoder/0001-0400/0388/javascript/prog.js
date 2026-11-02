import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n");
    const [s, f] = lines[0].split(" ").map(t => parseInt(t));
    console.log(Math.floor(s / f) + 1);
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
