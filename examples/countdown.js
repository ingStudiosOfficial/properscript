const startMin = 2;
const startSeconds = startMin * 60;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startTimer(duration) {
    console.log('Start:', duration);
    
    let remaining = duration;
    
    while (remaining > 0) {
        console.log('Count:', remaining);
        await sleep(1000);
        remaining--;
    }
    
    console.log('Times up!');
}

// Start timer
startTimer(startSeconds);