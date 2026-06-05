const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./app');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('catch (error: any)')) {
    content = content.replace(/catch \(error: any\)/g, 'catch (error: unknown)');
    content = content.replace(/error\.message/g, '(error as Error).message');
    changed = true;
  }
  
  if (content.includes('catch (err: any)')) {
    content = content.replace(/catch \(err: any\)/g, 'catch (err: unknown)');
    content = content.replace(/err\.message/g, '(err as Error).message');
    changed = true;
  }

  if (content.includes('params: any')) {
    content = content.replace(/params: any/g, 'params: Promise<{ id: string }>');
    changed = true;
  }

  if (file.includes('dashboard') && file.endsWith('page.tsx')) {
    content = content.replace(/, LogOut, Edit2/g, '');
    content = content.replace(/error: any/g, 'error: unknown'); 
    content = content.replace(/catch \(error\)/g, 'catch'); 
    content = content.replace(/\(app, i\)/g, '(app)');
    content = content.replace(/\(career, i\)/g, '(career)');
    content = content.replace(/\(cat, i\)/g, '(cat)');
    content = content.replace(/\(loc, i\)/g, '(loc)');
    changed = true;
  }

  if (file.includes('admin') && file.endsWith('page.tsx') && !file.includes('dashboard')) {
    content = content.replace(/catch \(err: any\)/g, 'catch');
    changed = true;
  }

  if (file.includes('resume') && file.endsWith('route.ts')) {
    content = content.replace(/import { verifyAuth } from '@\/utils\/auth';\n/g, '');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Fixed', file);
  }
});
