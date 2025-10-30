function getRandomInt(min, max) {
    min = Math.ceil(min); // Ensure min is an integer
    max = Math.floor(max); // Ensure max is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const minNum = 0;
const maxNum = 10;

const generatedRandomNumber = getRandomInt(minNum, maxNum);

const guessedNum = 7; // Input the guessed number

if (guessedNum === generatedRandomNumber) {
    console.log('Guessed number is correct!');
} else {
    console.log('Guessed number is incorrect!');
}