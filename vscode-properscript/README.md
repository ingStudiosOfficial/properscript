# ProperScript for VS Code

Syntax highlighting and IntelliSense for ProperScript - JavaScript, but proper.

## Features

- **Syntax Highlighting**: All ProperScript keywords beautifully colored
- **IntelliSense**: Autocomplete for ProperScript keywords, variables, and functions
- **Snippets**: Quick completions for common patterns

## Quick Start

1. Install the extension
2. Create a file with `.ps` extension
3. Start coding in ProperScript!

## Example
```javascript
persistent greeting = "Hello, World!";
announce(greeting);

procedure greet(name) {
  announce("Hello,", name);
}

greet("ProperScript");
```

## Keywords

| ProperScript | JavaScript |
|--------------|------------|
| `changeable` | `let` |
| `persistent` | `const` |
| `procedure` | `function` |
| `announce` | `console.log` |
| `whether` | `if` |
| `queue` | `await` |

[Full documentation](https://github.com/ingStudiosOfficial/properscript)

## Links

- [GitHub Repository](https://github.com/ingStudiosOfficial/properscript)
- [Report Issues](https://github.com/ingStudiosOfficial/properscript/issues)
- [Compiler (npm)](https://www.npmjs.com/package/properscript)

## License

Apache-2.0