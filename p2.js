let rows = 5;

for (let i = 1; i <= rows; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += j + ' ';
    }
    console.log(line.trim());
}
