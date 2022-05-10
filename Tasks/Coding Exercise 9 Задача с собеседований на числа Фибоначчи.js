function fib(number) {
    let fibonacci = [0, 1];
    for (let i = 2; fibonacci[i - 1] < number-1; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci.join(' ');
}

console.log(fib(4));