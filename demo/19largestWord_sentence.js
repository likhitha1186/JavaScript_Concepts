function LargestWord(){
    let sentence= " Find the largest word in the given sentence";
        console.log("Given sentence :", sentence)
    let words=sentence.split(" ");
    let largest=""

    for(let word of words){
        if(word.length>largest.length){
            largest=word;
        }
    }
    console.log("Largest word:", largest)
}
LargestWord()