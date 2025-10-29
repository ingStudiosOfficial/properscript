const pkg = require('./package.json');
const fs = require('fs');
const path = require('path');
const { transpile } = require('@properscript/compiler');

const args = process.argv.slice(2); // Takes user arguments
const command = args[0];

switch (command) {
    case undefined:
    case '--help':
    case '--h':
        console.log(
`-- ProperScript Compiler ${pkg.version} --
Usage:
    proper compile <file.ps>  Compile a ProperScript (.ps) file to a JavaScript (.js) file
    proper --version || proper --v  Show version
    proper --help || proper --h Show help
    
Example:
    proper compile main.ps

[ Licensed under ${pkg.license} license ]
[ Made with 💖 by ${pkg.author} ]`
        );
        process.exit(0);
    
    case '--version':
    case '--v':
        console.log(`ProperScript CLI version ${pkg.version}`);
        process.exit(0);

    case 'compile':
        const inputFilePaths = args.slice(1);

        let successfulTranspiles = 0;

        inputFilePaths.forEach((inputFilePath, index) => {
            if (!inputFilePath) {
                console.error('Error: Please specify a file to compile');
                process.exit(1);
            }

            const fileExtensionName = path.extname(inputFilePath);

            if (fileExtensionName !== '.ps') {
                console.error(`Error: Expected a '.ps' file, received ${fileExtensionName || 'no extension'}`);
                console.error('Hint: ProperScript files must use the .ps extension');
                return;
            }

            if (!fs.existsSync(inputFilePath)) {
                console.error('Error: File specified does not exist');
                return;
            }

            try {
                const code = fs.readFileSync(inputFilePath, 'utf-8');
                const output = transpile(code);
                const outputFile = inputFilePath.replace(/\.ps$/, '.js');
                fs.writeFileSync(outputFile, output);
                successfulTranspiles++;
                console.log(`Success: Successfully compiled ${inputFilePath}`);
            } catch (error) {
                console.error(`Error while compiling ${inputFilePath}:`, error.message);
                return;
            }
        });
        console.log(`Success: Successfully transpiled ${successfulTranspiles} out of ${inputFilePaths.length} files`);
        process.exit(0);

    default:
        console.error('Error: Please specify an available command');
        console.error('Hint: Run proper --h to find all commands');
}