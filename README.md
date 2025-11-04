<p align="center">
  <img src="./images/ProperScript_Logo.svg" width="200px" alt="ProperScript Logo" />
</p>

<h1 align="center">ProperScript</h1>

<p align="center">
  <a href="https://badge.fury.io/js/properscript"><img src="https://badge.fury.io/js/properscript.svg" alt="npm version" height="18"></a><br>
  <strong>JavaScript, but proper.</strong><br>
  A delightfully British superset of JavaScript with more civilized keywords.
</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#syntax">Syntax</a> •
  <a href="#examples">Examples</a>
</p>

---

## Installation

Install ProperScript globally via npm:
```bash
npm install -g properscript
```

## Quick Start

1. Create a file `hello.ps`:
```javascript
changeable message = "Hello, ProperScript!";
announce(message);
```

## Visual Studio Code Extension

We have a Visual Studio Code extension to give you ProperScript IntelliSense. Check it out [here](https://marketplace.visualstudio.com/items?itemName=ingStudiosOfficial.properscript).

2. Compile it:
```bash
proper compile hello.ps
```

3. Run the compiled JavaScript:
```bash
node hello.js
```

## Syntax

### Keyword Reference

| ProperScript | JavaScript | Description |
|--------------|------------|-------------|
| `changeable` | `let` | Mutable variable |
| `persistent` | `const` | Immutable variable |
| `announce` | `console.log` | Print to console |
| `inform` | `console.warn` | Print warning |
| `blunder` | `error` | Print error |
| `sorry` | `error` | Error |
| `terribly sorry` | `fatal error` | Fatal error message |
| `queue` | `await` | Async await |
| `please` | `then` | Promise then |
| `correct` | `true` | Boolean true |
| `mistaken` | `false` | Boolean false |
| `acquire` | `import` | Import modules |
| `whether` | `if` | Conditional statement |
| `period` | `while` | While loop |
| `heretofore` | `while(true)` | Infinite loop |
| `changeover` | `switch` | Switch statement |
| `goback` | `return` | Return statement |
| `respectively` | `for` | For loop |
| `visit` | `goto` | Goto statement |

For complete documentation, see [docs/](./docs/).

## Examples

### Hello World

**ProperScript** (`hello.ps`):
```properscript
persistent greeting = "Hello, World!";
announce(greeting);
```

**Compiles to** (`hello.js`):
```javascript
const greeting = "Hello, World!";
console.log(greeting);
```

---

### Counter with Loop

**ProperScript** (`counter.ps`):
```properscript
persistent stopNum = 10;
changeable count = 0;

heretofore {
  whether (count === stopNum) {
    goback;
  }
  
  announce('Current count:', count);
  count++;
}
```

**Compiles to** (`counter.js`):
```javascript
const stopNum = 10;
let count = 0;

while(true) {
  if (count === stopNum) {
    return;
  }
  
  console.log('Current count:', count);
  count++;
}
```

---

### Async/Await

**ProperScript** (`async.ps`):
```properscript
async function fetchData() {
  changeable response = queue fetch('https://api.example.com/data');
  changeable data = queue response.json();
  goback data;
}

fetchData()
  .please(data => announce('Received:', data))
  .catch(sorry => announce('terribly sorry:', sorry));
```

**Compiles to** (`async.js`):
```javascript
async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  return data;
}

fetchData()
  .then(data => console.log('Received:', data))
  .catch(error => console.log('fatal error:', error));
```

---

### Error Handling

**ProperScript** (`errors.ps`):
```properscript
try {
  throw new Error("terribly sorry");
} catch (blunder) {
  inform("A blunder occurred:", blunder.message);
}
```

**Compiles to** (`errors.js`):
```javascript
try {
  throw new Error("fatal error");
} catch (error) {
  console.warn("A error occurred:", error.message);
}
```

More examples in [examples/](./examples/).

## CLI Usage
```bash
# Compile a single file
proper compile file.ps

# Compile multiple files
proper compile file1.ps file2.ps file3.ps

# Show version
proper --version

# Show help
proper --help
```

## Contributing

We welcome contributions! Here's how to get started:

1. Fork and clone the repository:
```bash
git clone https://github.com/ingStudiosOfficial/properscript.git
cd properscript
```

2. Install dependencies:
```bash
npm install
```

3. Make your changes and test:
```bash
node packages/cli/index.cjs compile examples/hello.ps
```

4. Submit a pull request

See [CONTRIBUTING](./CONTRIBUTING.md) for more details.

## License

Licensed under Apache-2.0. See [LICENSE](./LICENSE) for details.

## Credits

Made with 💖 by (ing) Studios and Ethan Lee

Original idea from a [r/programmingmemes](https://www.reddit.com/r/programmingmemes/comments/1oftcds/comment/nlen0tx/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button) comment

---

<p align="center">
  <sub>Keep calm and code proper 🫖</sub>
</p>