#!/usr/bin/env node

// Production start script
const path = require('path');
const { spawn } = require('child_process');

// Check if dist directory exists
const fs = require('fs');
const distPath = path.join(__dirname, 'dist');

if (!fs.existsSync(distPath)) {
  console.error('Error: dist directory does not exist. Please run "npm run build:server" first.');
  process.exit(1);
}

// Start the server
const server = spawn('node', ['dist/server.js'], {
  stdio: 'inherit',
  env: process.env
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
  process.exit(code);
});