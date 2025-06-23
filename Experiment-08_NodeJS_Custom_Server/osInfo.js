// CHONY Experiment 8 - OS Module Demo
// Author: Haswinchony Saladi (23AG1A0555)
// Aim: Display system information using Node.js 'os' module

const os = require('os');

console.log('===== CHONY Node.js OS Module Demo =====');
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPU Cores:', os.cpus().length);
console.log('Total Memory:', (os.totalmem() / (1024 ** 3)).toFixed(2), 'GB');
console.log('Free Memory:', (os.freemem() / (1024 ** 3)).toFixed(2), 'GB');
console.log('Uptime:', (os.uptime() / 3600).toFixed(2), 'hours');
console.log('User Info:', os.userInfo());
console.log('========================================'); 