// CHONY Experiment 8 - Custom Node.js HTTP Server
// Author: Haswinchony Saladi (23AG1A0555)
// Aim: Create a custom HTTP server using Node.js core modules

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <html>
        <head>
            <title>CHONY Node.js Custom Server</title>
            <style>
                body { background: #111; color: #fff; font-family: 'SF Pro Display', 'Inter', sans-serif; text-align: center; padding: 5rem; }
                h1 { color: #dc3545; font-size: 3rem; }
                .footer { margin-top: 3rem; color: #aaa; font-size: 1rem; }
            </style>
        </head>
        <body>
            <h1>Welcome to CHONY Node.js Custom Server!</h1>
            <p>This is a simple HTTP server built with Node.js core modules.</p>
            <div class="footer">&copy; 2024 CHONY | Experiment 8 | Node.js Core Modules Demo</div>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`CHONY server running at http://localhost:${PORT}`);
}); 