const letterWrapper = document.getElementById('unique_letter')
const btn = document.getElementById('get_letter')
const text = document.getElementById('text')

const splitWords = (text) => {
    return text.replace(/[.,\/#!$%'\^&\*;:{}=\-_`~()]/g, " ").replace(/\s{2,}/g, " ").trim().split(' ')
}

const findUniqueLetter = (letters) => {
    const letterSet = new Set();

    for (const letter of letters) {
        if (letterSet.has(letter)) {
            letterSet.delete(letter);
        } else {
            letterSet.add(letter);
        }
    }

    if (letterSet.size > 0) return letterSet.values().next().value;

    return null
};

const findUniqueLetterInWords = (words) => {
    const uniqueLetters = [];

    for (const word of words) {
        const uniqueLetter = findUniqueLetter(word)

        if (uniqueLetter !== null) uniqueLetters.push(uniqueLetter)
    }

    return uniqueLetters
};

const findUniqueLetterInArray = (letters) => {

    const uniqueLetter = findUniqueLetter(letters)

    if (uniqueLetter !== null) {
        return uniqueLetter
    }
    return "There is no unique letter"
};

btn.addEventListener('click', () => {
    const arr = splitWords(text.value)
    const letters = findUniqueLetterInWords(arr)
    letterWrapper.innerText = `Unique letter : ${findUniqueLetterInArray(letters)}`
})