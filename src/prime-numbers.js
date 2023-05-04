// Python
// Crtl-K, Crtl-C
// # Find Prime Numbers
// for x in range(2, 1000):
//   for y in range(2, x):
//     if x % y == 0:
//       break
//   else:
//     print(x)

// JavaSCript - Find Prime Numbers
for (let x = 2; x <= 100; x++) {
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