import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function loadHtmlFile(filePath) {
    try {
        const fullPath = path.join(__dirname, '..', filePath);
        return fs.readFileSync(fullPath, 'utf8');
    } catch (error) {
        console.error(`Error loading HTML file: ${filePath}`, error);
        return '';
    }
} 