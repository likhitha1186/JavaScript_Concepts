function countOfChars(){
    let str = "Likhitha";
    let count = {};

    str = str.toLowerCase();

    for(let i=0; i<str.length; i++){
        let ch = str[i];

        if(count[ch])
            count[ch]++;
        else
            count[ch]=1;
    }
    return count;
}
console.log(countOfChars());