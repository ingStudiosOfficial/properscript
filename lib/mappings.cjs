// Keyword mappings from ProperScript to JavaScript
const KEYWORDS = {
    // Async/Promises
    'queue': 'await',
    'please': 'then',
    
    // Variables
    'changeable': 'let',
    'persistent': 'const',

    // Functions
    'procedure': 'function',
    
    // Booleans
    'correct': 'true',
    'mistaken': 'false',
    
    // Imports
    'acquire': 'import',
    
    // Control flow
    'visit': 'goto',
    'whether': 'if',
    'period': 'while',
    'changeover': 'switch',
    'goback': 'return',
    'respectively': 'for',
    
    // Output
    'announce': 'console.log',
    'blunder': 'error',
    'inform': 'warn'
};

// Multi-word patterns
const PATTERNS = [
    { from: /\bheretofore\b/g, to: 'while(true)' },
    { from: /\bterribly sorry\b/gi, to: 'fatal error' },
    { from: /\bsorry\b/g, to: 'error' },
];

module.exports = { KEYWORDS, PATTERNS };