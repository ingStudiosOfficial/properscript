const { slumber } = require('@properscript/runtime');

const startMin = 2;
const startSeconds = startMin * 60;

async function startTimer(duration) {
    console.log('Start:', duration);
    
    let remaining = duration;
    
    while (remaining > 0) {
        console.log('Count:', remaining);
        await slumber(1000);
        remaining--;
    }
    
    console.log('Times up!');
}

// Start timer
startTimer(startSeconds);