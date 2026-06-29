function NumberOfCount(num){
    let count=0;
    while(num> 0){
        count++;
        num=Math.floor(num/10);
    }
    console.log(count)
}
NumberOfCount(123654)

function SumOfDigit(num){
    let count = num%10;
    while(num>9){
        num = Math.floor(num/10);
    }
    count+=num;
    console.log(count);
}
SumOfDigit(10)