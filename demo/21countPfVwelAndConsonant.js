function countOfVowelAndConsonant(){
    let str = "Likhitha";
    let consonantCount=0, vowelsCount=0, vowels='aeiou';

    str = str.toLowerCase();

    for(let ch of str){
        if(ch>='a'&&ch<='z'){
            if(vowels.includes(ch))
                vowelsCount++
            else
                consonantCount++;
        }
    }
    return { vowelsCount, consonantCount}
}

console.log(countOfVowelAndConsonant())