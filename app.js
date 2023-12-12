const countries = [
    "Pakistan",
    "India",
    "Tajikistan",
    "Russia",
    "Kazakhstan",
    "Greece",
    "Turkmenistan",
    "Turkey",
    "Kyrgyzstan",
    "Ukraine",
    "Uzbekistan",
];

const endWithStanCountriesName = countries.filter((c, i, arr)=>{
    return c.endsWith("stan");
})

console.log(endWithStanCountriesName)

//////////////////////////////////////////////

const sentence = "In the end, we only regret the chances we didn`t take.";

const firstCapitalLetter = sentence.split(" ").map((word, i, arr) => {
    return word[0].toUpperCase() + word.slice(1)
});

console.log(firstCapitalLetter.join(" "))

//////////////////////////////////////////////

const reversed = sentence.split(" ").reverse().join(" ");

console.log(reversed)

//////////////////////////////////////////////

const mostLongWord = sentence.split(" ");
let longerWord = mostLongWord[0];

mostLongWord.forEach((word) => {
    if(word.length > longerWord.length){
        longerWord = word;
    }
});

console.log(longerWord)