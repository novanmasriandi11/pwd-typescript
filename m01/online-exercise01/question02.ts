function cubeRoot(n: number): number{
    const tolerance = 0.00000001;
    let calc = n / 3;
    while (Math.abs(calc ** 3 - n) > tolerance) {
        calc = (2 * calc + n / (calc ** 2)) / 3;
    }
    return calc;
}

console.log(cubeRoot(8));
console.log(cubeRoot(64));
console.log(cubeRoot(27));
console.log(cubeRoot(1000));
let result: number = Math.cbrt(8);
console.log(result);