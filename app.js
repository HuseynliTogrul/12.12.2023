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

// 1. Countries array-ində sonu 'stan' ilə bitən ölkələrdən array yaratmaq

const endWithStanCountriesName = countries.filter((c, i, arr) => {
    return c.endsWith("stan");
})

console.log(endWithStanCountriesName)


// 2. Sentence dəyişənindəki bütün sözlərin baş hərfləri böyük şəkildə yazmaq. ("In The End" - bu formada)

const sentence = "In the end, we only regret the chances we didn`t take.";

const firstCapitalLetter = sentence.split(" ").map((word, i, arr) => {
    return word[0].toUpperCase() + word.slice(1)
});

console.log(firstCapitalLetter.join(" "))


// 3. Sentence dəyişənini tərsinə yazmaq. (In the end, we only regret the chances we didn't take. - bu formada)

const reversed = sentence.split(" ").reverse().join(" ");

console.log(reversed)


// 4. Sentence dəyişənində olan ən uzun sözü tapmaq.

const mostLongWord = sentence.split(" ");
let longerWord = mostLongWord[0];

mostLongWord.forEach((word) => {
    if (word.length > longerWord.length) {
        longerWord = word;
    }
});

console.log(longerWord)

/////////////////////////////////////////////

const books = [
    "To Kill a Mockingbird",
    "1984",
    "The Great Gatsby",
    "Pride and Prejudice",
    "The Catcher in the Rye",
    "The Lord of the Rings",
    "Animal Farm",
    "Brave New World",
    "The Grapes of Wrath",
    "The Hobbit",
    "One Hundred Years of Solitude",
    "The Catcher in the Rye",
    "Catch-22",
    "The Brothers Karamazov",
    "Moby Dick",
    "The Odyssey",
    "Frankenstein",
    "Alice's Adventures in Wonderland",
    "The Picture of Dorian Gray",
    "War and Peace",
];
console.log("-------------------------------------------------------")

// 5. Books array-ini əlifba sırası ilə yazılmış array-ə çevirmək

const sortBooks = books.sort();
console.log(sortBooks);


// 6. Books array-ində adı ən uzun olan kitabı tapmaq.

const longestBook = books.sort((a, b) => {
  return b.length - a.length  
})[0];

console.log(longestBook);


// 7. Books array-ində olan kitabların ümumi olaraq hərflərinin sayını hesablamaq.

const countBooksNameLetters = books.join("").length;
console.log(countBooksNameLetters);