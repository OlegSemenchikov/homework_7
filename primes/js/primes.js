for(var i = 0; i <= 1000; i++){
    if(isPrime(i)) console.log(i);
}
function isPrime(num) {
    if(num < 2) return false;
    for (var j = 2; j < num; j++) {
        if(num%j==0)
            return false;
    }
    return true;
}
