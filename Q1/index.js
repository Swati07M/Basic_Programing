
function checkPrime(num){
    for(let i=2;i<=num-1;i++){
        if(num%i==0){
            return false
        }
    }
    return true
}
console.log(checkPrime(7))

function evenOdd(num){
    if(num%2 == 0){
      return true;
    }
    else{
      return false;
    }
}
console.log(evenOdd(7));