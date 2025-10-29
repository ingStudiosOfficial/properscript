procedure add(val1, val2) {
    return val1 + val2;
}

procedure subtract(val1, val2) {
    return val1 - val2;
}

procedure multiply(val1, val2) {
    return val1 * val2;
}

procedure divide(val1, val2) {
    return val1 / val2;
}

// Test 1
console.log('Performing calculation 1...');
console.log('6 + 7 =', add(6, 7));

// Test 2
console.log('Performing calculation 2...');
console.log('65 - 47 =', subtract(65, 47));

// Test 3
console.log('Performing calculation 3...');
console.log('6 * 7 =', multiply(6, 7));

// Test 4
console.log('Performing calculation 4...');
console.log('100 / 5 =', divide(100, 5));