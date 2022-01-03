function identifyPrime(num) {
    // Write code here

    var isPrime = true
    if (num === 1) {
    console.log();
}else if (num > 1) {    
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}
}

identifyPrime(13)