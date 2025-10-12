import { exec } from 'child_process';

const serverProcess = exec('npx ts-node-dev --respawn --esm server/server.ts');

serverProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

serverProcess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

serverProcess.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});