import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as esbuild from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const bundleFirebase = async () => {
  const firebaseBundlePath = path.join(__dirname, 'firebase-bundle.js');
  if (!fs.existsSync(firebaseBundlePath)) {
    console.log('Generating firebase-bundle.js with esbuild...');
    await esbuild.build({
      stdin: {
        contents: `
          export { initializeApp, getApps, getApp } from 'firebase/app';
          export { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc, collection, getDocs, onSnapshot, runTransaction, serverTimestamp, query, orderBy, where, limit, addDoc } from 'firebase/firestore';
          export { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
        `,
        resolveDir: __dirname
      },
      bundle: true,
      format: 'esm',
      outfile: firebaseBundlePath,
      minify: false
    });
    console.log('firebase-bundle.js generated.');
  }
};

await bundleFirebase();

const distDir = path.join(__dirname, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Allowed extensions or files to copy to dist
const extensions = new Set([
  '.html',
  '.htm',
  '.css',
  '.js',
  '.jpeg',
  '.jpg',
  '.png',
  '.webp',
  '.svg',
  '.gif',
  '.ico',
  '.json',
  '.xml',
  '.txt',
  '.webmanifest'
]);

const ignoredFiles = new Set([
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  'metadata.json',
  'build.js',
  'server.js'
]);

const files = fs.readdirSync(__dirname);

let copiedCount = 0;
for (const file of files) {
  const fullPath = path.join(__dirname, file);
  const stat = fs.statSync(fullPath);
  
  if (stat.isFile()) {
    if (ignoredFiles.has(file)) continue;
    const ext = path.extname(file).toLowerCase();
    if (extensions.has(ext) || file === '_headers') {
      fs.copyFileSync(fullPath, path.join(distDir, file));
      copiedCount++;
    }
  }
}

console.log(`Successfully built ${copiedCount} static assets into /dist directory.`);
