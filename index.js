const splitWords = (text) => {
    return text.replace(/[.,\/#!$%'\^&\*;:{}=\-_`~()]/g, " ").replace(/\s{2,}/g, " ").trim().split(' ')
}

const findUniqueLetterInWords = (words) => {
    console.log(words, words.length)
    const uniqueLetters = [];

    for (const word of words) {
        const charCount = {};

        for (const char of word) {
            charCount[char] = (charCount[char] || 0) + 1;
        }

        for (const key in charCount) {
            if (charCount.hasOwnProperty(key) && charCount[key] === 1) {
                uniqueLetters.push(key);
                break;
            }
        }
    }

    return uniqueLetters;
}

const findUniqueLetterInArray = (letters) => {
    console.log(letters, letters.length)
    const letterCount = {};

    for (const letter of letters) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    for (const letter of letters) {
        if (letterCount[letter] === 1) {
            return letter;
        }
    }

    return null;
}

const text = "C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup"


console.log(findUniqueLetterInArray(findUniqueLetterInWords(splitWords(text))));