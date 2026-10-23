import fs from 'node:fs'

const tbl = [["Drew", "Won" , "Lost"],
	     ["Lost", "Drew", "Won" ],
	     ["Won" , "Lost", "Drew"]];

function main(input) {
    const lines = input.split("\n");
    const [n, k] = lines[0].split(" ").map(t => parseInt(t));
    console.log(tbl[n][k]);
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
