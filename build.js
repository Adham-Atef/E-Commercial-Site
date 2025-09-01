const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Create a file to stream archive data to
const output = fs.createWriteStream(path.join(__dirname, 'e-commerce-vanilla-js.zip'));
const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level
});

// Listen for all archive data to be written
output.on('close', function () {
    console.log('✅ Project packaged successfully!');
    console.log('📦 Archive size: ' + (archive.pointer() / 1024 / 1024).toFixed(2) + ' MB');
    console.log('📁 File: e-commerce-vanilla-js.zip');
});

// Good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
        console.warn('⚠️ Warning:', err);
    } else {
        throw err;
    }
});

// Good practice to catch this error explicitly
archive.on('error', function (err) {
    throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Add files to the archive
const filesToInclude = [
    '*.html',
    'css/**/*',
    'js/**/*',
    'webfonts/**/*',
    'README.md'
];

filesToInclude.forEach(pattern => {
    if (pattern.includes('**')) {
        // Handle directory patterns
        const dirPath = pattern.split('/')[0];
        if (fs.existsSync(dirPath)) {
            archive.directory(dirPath, dirPath);
        }
    } else {
        // Handle file patterns
        const files = fs.readdirSync('.').filter(file => {
            if (pattern.includes('*')) {
                const ext = pattern.split('*')[1];
                return file.endsWith(ext);
            }
            return file === pattern;
        });

        files.forEach(file => {
            if (fs.statSync(file).isFile()) {
                archive.file(file, { name: file });
            }
        });
    }
});

// Finalize the archive (ie we are done appending files but streams have to finish yet)
archive.finalize();

console.log('🚀 Building project package...');
console.log('📁 Including files and directories...');
