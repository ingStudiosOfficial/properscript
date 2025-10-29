const { KEYWORDS, PATTERNS } = require('./mappings.cjs');

function transpile(code) {
    let result = code;
    
    // Step 1: Extract and protect strings
    const strings = [];
    result = result.replace(/(["'`])(?:(?=(\\?))\2.)*?\1/g, (match) => {
        const placeholder = `__STRING_${strings.length}__`;
        strings.push(match);
        return placeholder;
    });
    
    // Step 2: Handle multi-word patterns
    for (const { from, to } of PATTERNS) {
        result = result.replace(from, to);
    }
    
    // Step 3: Handle single keywords
    for (const [proper, js] of Object.entries(KEYWORDS)) {
        const regex = new RegExp(`\\b${escapeRegex(proper)}\\b`, 'g');
        result = result.replace(regex, js);
    }
    
    // Step 4: Restore strings
    result = result.replace(/__STRING_(\d+)__/g, (match, index) => {
        return strings[parseInt(index)];
    });
    
    return result;
}

// Escape special regex characters
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = { transpile };