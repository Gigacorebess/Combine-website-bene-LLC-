import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(process.argv[2]);
const excluded=new Set(['node_modules','.next','.git','.output','dist','.openai','public']);
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>excluded.has(e.name)?[]:e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const files=walk(root);
const sources=files.filter(f=>/\.(tsx?|jsx?|mjs)$/.test(f)&&!f.endsWith('.d.ts'));
const alias=fs.existsSync(path.join(root,'src'))?path.join(root,'src'):root;
const texts=new Map(sources.map(f=>[f,fs.readFileSync(f,'utf8')]));
const entry=sources.filter(f=>/[\\/]app[\\/]/.test(f)&&/^(page|layout|route|loading|error|not-found|global-error|template|default|sitemap|robots)\./.test(path.basename(f)));
const seen=new Set();
function visit(f){if(seen.has(f)||!texts.has(f))return;seen.add(f);const t=texts.get(f);for(const m of t.matchAll(/(?:from\s*|import\s*\(|require\s*\(|import\s*)['"]([^'"]+)['"]/g)){let p=m[1];if(p.startsWith('@/'))p=path.join(alias,p.slice(2));else if(p.startsWith('.'))p=path.resolve(path.dirname(f),p);else continue;const target=[p,...['.tsx','.ts','.jsx','.js','.mjs'].map(x=>p+x),...['index.tsx','index.ts','index.js'].map(x=>path.join(p,x))].find(x=>texts.has(x));if(target)visit(target);}}
entry.forEach(visit);
const unused=sources.filter(f=>/[\\/](components|hooks|lib)[\\/]/.test(f)&&!seen.has(f));
console.log(JSON.stringify({root,entrypoints:entry.length,reachable:seen.size,unused:unused.map(f=>path.relative(root,f))},null,2));
