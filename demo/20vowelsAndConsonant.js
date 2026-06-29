function VowelsAndConsonant(){
    let sentence=" My name is Likhitha P K"
    let words= sentence.split("")
    let vowels="aeiouAEIOU";
    let vowelsHolder="", consonantHolder="";

    for(let i=0;i<words.length;i++){
        let word=words[i]
        if(word.match(/[a-zA-Z]/)){
            if(vowels.includes(word)){
                vowelsHolder=vowelsHolder+word
            }else{
                consonantHolder=consonantHolder+word;
            }
        }
    }
    console.log("Vowels are:", vowelsHolder);
    console.log("Consonats are :", consonantHolder)
}

VowelsAndConsonant()