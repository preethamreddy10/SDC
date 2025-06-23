// CHONY Experiment 8 - Events Module Demo
// Author: Haswinchony Saladi (23AG1A0555)
// Aim: Demonstrate custom events using Node.js 'events' module

const EventEmitter = require('events');

class ChonyEmitter extends EventEmitter {}

const chony = new ChonyEmitter();

// Listener for 'greet' event
chony.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to CHONY Node.js Events Demo.`);
});

// Emit the 'greet' event
chony.emit('greet', 'Alice'); 