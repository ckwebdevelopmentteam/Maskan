const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /#1F2833/gi, replacement: '#CED1BF' },
  { regex: /#0B0C10/gi, replacement: '#2B3530' },
  { regex: /#C5C6C7/gi, replacement: '#D1CCBF' }
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const dirsToProcess = ['app', 'components', 'sections'];
dirsToProcess.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = walk(dir);
    files.forEach(file => {
      let content = fs.readFileSync(file, 'utf8');
      let newContent = content;
      replacements.forEach(r => {
        newContent = newContent.replace(r.regex, r.replacement);
      });
      if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated', file);
      }
    });
  }
});
