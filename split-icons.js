const fs = require('fs');
const path = require('path');

const fileContent = fs.readFileSync('src/components/icons/TechIcons.tsx', 'utf8');

const lines = fileContent.split('\n');
const outDir = 'src/components/icons/svg';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

let currentIcon = null;
let currentLines = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const match = line.match(/^export function ([A-Za-z0-9_]+)\(/);
  
  if (match) {
    currentIcon = match[1];
    currentLines = ['import React from "react";\n', line];
  } else if (currentIcon) {
    currentLines.push(line);
    if (line === '}') {
      // End of function
      fs.writeFileSync(path.join(outDir, `${currentIcon}.tsx`), currentLines.join('\n'));
      currentIcon = null;
      currentLines = [];
    }
  }
}
console.log('Icons split successfully');
