import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n");
    const [a, b] = lines[0].split(" ").map(t => parseInt(t));
    const s = lines[1];
    console.log(a + b, " ", s);
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
