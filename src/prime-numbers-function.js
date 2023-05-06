
function printPrimeNumbers(number) {
    for (let x = 2; x <= number; x++) {
        let isPrime = true;
        for (let y = 2; y < x; y++) {
            //console.log(x, y, x % y, x % y == 0);

            if (x % y == 0) {
                isPrime = false;
            }
        }
        if (isPrime)
            console.log(x)
    }
}

printPrimeNumbers(10)