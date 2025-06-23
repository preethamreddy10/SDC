// CHONY Experiment 8 - Path Module Demo
// Author: Haswinchony Saladi (23AG1A0555)
// Aim: Demonstrate file path operations using Node.js 'path' module

const path = require('path');

const filePath = __filename;

console.log('===== CHONY Node.js Path Module Demo =====');
console.log('File Name:', path.basename(filePath));
console.log('Directory Name:', path.dirname(filePath));
console.log('File Extension:', path.extname(filePath));
console.log('Path Join Example:', path.join(__dirname, 'test', 'file.txt'));
console.log('=========================================='); 