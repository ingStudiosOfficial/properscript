const stopNum = 10;

let count = 0

while(true) {
    if (count === stopNum) {
        return;
    }

    console.log('Current count:', count);

    count++;
}