const { KEYWORDS, PATTERNS } = require('./mappings.cjs');

function transpile(code) {
    let result = code;
    
    // Detect which runtime functions are used
    const runtimeFunctions = [
        'slumber', 'postpone', 'interval', 'cease', 'terminate', 
        'retrieve', 'decipher'
    ];
    
    const usedFunctions = runtimeFunctions.filter(fn => 
        new RegExp(`\\b${fn}\\b`).test(code)
    );
    
    // Protect strings
    const strings = [];
    result = result.replace(/(["'`])(?:(?=(\\?))\2.)*?\1/g, (match) => {
        const placeholder = `__STRING_${strings.length}__`;
        strings.push(match);
        return placeholder;
    });
    
    // Handle multi-word replacements
    for (const { from, to } of PATTERNS) {
        result = result.replace(from, to);
    }
    
    // Handle keywords
    for (const [proper, js] of Object.entries(KEYWORDS)) {
        const regex = new RegExp(`\\b${escapeRegex(proper)}\\b`, 'g');
        result = result.replace(regex, js);
    }
    
    // Restore strings
    result = result.replace(/__STRING_(\d+)__/g, (match, index) => {
        return strings[parseInt(index)];
    });
    
    // Inject runtime import if needed
    if (usedFunctions.length > 0) {
        const importStatement = `const { ${usedFunctions.join(', ')} } = require('@properscript/runtime');\n\n`;
        result = importStatement + result;
    }
    
    return result;
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = { transpile };