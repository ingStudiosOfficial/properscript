const vscode = require('vscode');

function activate(context) {
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
		
		// Output
		'announce': 'console.log',
		'blunder': 'error',
		'inform': 'warn'
	};

	const provider = vscode.languages.registerCompletionItemProvider('properscript', {
		provideCompletionItems(document, position) {
		const completions = [];

		// 1. Add keyword completions
		for (const [properKeyword, jsKeyword] of Object.entries(KEYWORDS)) {
			const kind = getCompletionKind(properKeyword);
			const item = new vscode.CompletionItem(properKeyword, kind);
			item.detail = jsKeyword;
			item.documentation = `Compiles to \`${jsKeyword}\``;
			completions.push(item);
		}

		// 2. Find variables in current document
		const text = document.getText();
		const variables = extractVariables(text);
		
		variables.forEach(varName => {
			const item = new vscode.CompletionItem(varName, vscode.CompletionItemKind.Variable);
			item.detail = 'variable';
			completions.push(item);
		});

		// 3. Find functions in current document
		const functions = extractFunctions(text);
		
		functions.forEach(funcName => {
			const item = new vscode.CompletionItem(funcName, vscode.CompletionItemKind.Function);
			item.detail = 'function';
			completions.push(item);
		});

		return completions;
		}
	});

	context.subscriptions.push(provider);
}

// Extract variable names from code
function extractVariables(text) {
	const variables = new Set();
	
	// Match: changeable varName = ...
	// Match: persistent varName = ...
	// Match: let varName = ...
	// Match: const varName = ...
	// Match: var varName = ...
	const varRegex = /\b(changeable|persistent|let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
	
	let match;
	while ((match = varRegex.exec(text)) !== null) {
		variables.add(match[2]);
	}
	
	return Array.from(variables);
}

// Extract function names from code
function extractFunctions(text) {
	const functions = new Set();
	
	// Match: procedure funcName(...)
	// Match: function funcName(...)
	const funcRegex = /\b(procedure|function)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g;
	
	let match;
	while ((match = funcRegex.exec(text)) !== null) {
		functions.add(match[2]);
	}
	
	// Match: const funcName = (...) =>
	// Match: const funcName = function(...)
	const arrowRegex = /\b(changeable|persistent|const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(\(.*?\)\s*=>|function)/g;
	
	while ((match = arrowRegex.exec(text)) !== null) {
		functions.add(match[2]);
	}
	
	return Array.from(functions);
}

function getCompletionKind(keyword) {
	const categories = {
		variables: ['changeable', 'persistent'],
		functions: ['procedure', 'announce', 'inform'],
		controlFlow: ['whether', 'period', 'changeover', 'goback', 'visit'],
		async: ['queue', 'please'],
		values: ['correct', 'mistaken'],
		modules: ['acquire'],
		events: ['blunder', 'sorry']
	};

	if (categories.variables.includes(keyword)) return vscode.CompletionItemKind.Variable;
	if (categories.functions.includes(keyword)) return vscode.CompletionItemKind.Function;
	if (categories.controlFlow.includes(keyword)) return vscode.CompletionItemKind.Keyword;
	if (categories.async.includes(keyword)) return vscode.CompletionItemKind.Method;
	if (categories.values.includes(keyword)) return vscode.CompletionItemKind.Value;
	if (categories.modules.includes(keyword)) return vscode.CompletionItemKind.Module;
	if (categories.events.includes(keyword)) return vscode.CompletionItemKind.Event;
	
	return vscode.CompletionItemKind.Keyword;
}

function deactivate() {}

module.exports = { activate, deactivate };