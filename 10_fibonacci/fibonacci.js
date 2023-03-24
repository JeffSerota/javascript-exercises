const fibonacci = function (n) {
    if (n < 0) return "OOPS"; // reject negative numbers

    n = parseInt(n, 10); // parse the input as an integer

    let a = 0;
    let b = 1;

    if (n === 0) {
        return a;
    } else if (n === 1) {
        return b;
    } else {
        for (let i = 2; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}


// Do not edit below this line
module.exports = fibonacci;
