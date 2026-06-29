function CapitalAndSmallLetters(){
    let sentence = "My Name is Likhitha P K"
    let words = sentence.split("")
    let capsLetter="", smallLetter="";

    for(let i=0;i< words.length;i++){
        let word= words[i];
        if(word >='a'&& word<='z') {
            smallLetter=smallLetter+word;
        }else if(word>='A'&&word<='Z'){
            capsLetter=capsLetter+word
        }
    }
    console.log("Capital Letters:", capsLetter);
    console.log("Small Letters :", smallLetter)
}
CapitalAndSmallLetters()