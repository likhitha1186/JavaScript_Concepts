function PrimeNumber(num){
     count=0;
    for(let i=1; i<= num; i++){
        if(num%i == 0){
            count++;
        }
    }
    if(count==2){
        console.log(num+ " is a prime number")
    }
    else{
        console.log(num + " is not a prime number")
    }
}
PrimeNumber(25)
PrimeNumber(29)

function PrimeNumberSeries(num){
    for(let i=2; i<=num;i++){
        let count=0;
        for(j=1; j<= i; j++){
            if(i % j == 0){
                count++
            }
        }
        if(count==2){
         console.log(i)
    }
    }
}
PrimeNumberSeries(25)