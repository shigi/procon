import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n");
    const [a, b] = lines[0].split(" ").map(t => parseInt(t));
    for (let i = a; i <= b; ++i) {
        if (i % 3 == 0 || i.toString().includes("3"))
            console.log(i);
    }
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
