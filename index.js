const letterWrapper = document.getElementById('unique_letter')
const btn = document.getElementById('get_letter')
const text = document.getElementById('text')

const splitWords = (text) => {
    return text.replace(/[.,\/#!$%'\^&\*;:{}=\-_`~()]/g, " ").replace(/\s{2,}/g, " ").trim().split(' ')
}

const findUniqueLetterInWords = (words) => {
    const uniqueLetters = [];

    for (const word of words) {

        const charCount = new Map();

        for (const char of word) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }

        for (const [char, count] of charCount) {
            if (count === 1) {
                uniqueLetters.push(char);
                break;
            }
        }
    }

    return uniqueLetters;
}

const findUniqueLetterInArray = (letters) => {
    const letterCount = new Map();

    for (const letter of letters) {
        letterCount.set(letter, (letterCount.get(letter) || 0) + 1);
    }

    for (const letter of letters) {
        if (letterCount.get(letter) === 1) return letter;
    }

    return "There is no unique letter";
}

btn.addEventListener('click', () => {
    const arr = splitWords(text.value)
    const letters = findUniqueLetterInWords(arr)
    letterWrapper.innerText = `Unique letter : ${findUniqueLetterInArray(letters)}`
})
