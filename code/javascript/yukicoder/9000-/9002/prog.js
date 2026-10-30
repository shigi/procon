import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n");
    const n = parseInt(lines[0]);
    for (let i = 1; i <= n; ++i) {
        if (i % 15 == 0)
            console.log("FizzBuzz");
        else if (i % 3 == 0)
            console.log("Fizz");
        else if (i % 5 == 0)
            console.log("Buzz");
        else
            console.log(i);
    }
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
