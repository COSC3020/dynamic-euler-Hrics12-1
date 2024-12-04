function factorial(n) {
    if (n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    if (n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}

function bottomUp(n) {
    if (n === 0)
        return 1;

    let fact = 1;
    let e = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
        e += 1.0 / fact;
    }

    return e;
}


//const result = bottomUp(10);
//console.log(result);
