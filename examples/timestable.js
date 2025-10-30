const max = 10;
const factor = 5;
const results = [];

function multiplyWithFactor(num) {
    return num * factor;
}

for (let i = 1; i < max; i++) {
    console.log('Generating multiple', i);
    const result = multiplyWithFactor(i);
    console.log('Result:', result);
    results.push(result);
}

console.log(`Times table for ${factor}:`, results);