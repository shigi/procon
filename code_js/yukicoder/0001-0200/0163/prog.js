import fs from 'node:fs'

function main(input) {
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const b = "abcdefghijklmnopqrstuvwxyz".split('');
    const h = {};
    for (let i = 0; i < 26; ++i) {
	h[a[i]] = b[i];
	h[b[i]] = a[i];
    }

    const lines = input.split("\n");
    const s = lines[0].split('');
    let t = "";
    for (let i = 0; i < s.length; ++i)
	t += h[s[i]];

    console.log(t);
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
