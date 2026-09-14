#!/usr/bin/env node

/**
 * Batch UI Refinement Script
 * Applies Bloom-style premium design system to all remaining pages
 */

const fs = require('fs');
const path = require('path');

const pages = [
    'c:\\Users\\av074\\Downloads\\Gigacore\\src\\app\\partnership\\page.tsx',
    'c:\\Users\\av074\\Downloads\\Gigacore\\src\\app\\market\\page.tsx',
    'c:\\Users\\av074\\Downloads\\Gigacore\\src\\app\\economics\\page.tsx',
    'c:\\Users\\av074\\Downloads\\Gigacore\\src\\app\\company\\page.tsx',
    'c:\\Users\\av074\\Downloads\\Gigacore\\src\\app\\contact\\page.tsx'
];

const replacements = [
    // Spacing replacements
    { from: /className="py-12 md:py-20/g, to: 'className="py-[var(--spacing-section)]' },
    { from: /className="py-24/g, to: 'className="py-[var(--spacing-section)]' },
    { from: /className="py-20/g, to: 'className="py-[var(--spacing-section)]' },

    // Typography replacements
    { from: /className="text-4xl md:text-6xl lg:text-7xl/g, to: 'className="text-[length:var(--font-hero)]' },
    { from: /className="text-3xl md:text-4xl/g, to: 'className="text-[length:var(--font-h1)]' },
    { from: /className="text-2xl md:text-3xl/g, to: 'className="text-[length:var(--font-h2)]' },
    { from: /className="text-xl md:text-2xl/g, to: 'className="text-[length:var(--font-intro)]' },
    { from: /className="text-lg md:text-xl/g, to: 'className="text-[length:var(--font-intro)]' },

    // Color replacements
    { from: /text-gray-900/g, to: 'text-brand-secondary' },

    // Shadow replacements
    { from: /shadow-2xl/g, to: 'shadow-[0_4px_20px_rgba(0,0,0,0.03)]' },
    { from: /shadow-xl/g, to: 'shadow-[0_4px_20px_rgba(0,0,0,0.03)]' },
    { from: /shadow-lg/g, to: 'shadow-[0_4px_20px_rgba(0,0,0,0.03)]' },

    // Border replacements
    { from: /border-gray-200/g, to: 'border-gray-100' },
    { from: /border-white\/20/g, to: 'border-gray-100' }
];

function applyReplacements(content) {
    let updated = content;
    replacements.forEach(({ from, to }) => {
        updated = updated.replace(from, to);
    });
    return updated;
}

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const updated = applyReplacements(content);

        if (content !== updated) {
            fs.writeFileSync(filePath, updated, 'utf8');
            console.log(`✓ Updated: ${path.basename(filePath)}`);
            return true;
        } else {
            console.log(`- No changes: ${path.basename(filePath)}`);
            return false;
        }
    } catch (error) {
        console.error(`✗ Error processing ${filePath}:`, error.message);
        return false;
    }
}

console.log('Starting batch UI refinement...\n');
let updatedCount = 0;

pages.forEach(page => {
    if (processFile(page)) {
        updatedCount++;
    }
});

console.log(`\nCompleted! Updated ${updatedCount} of ${pages.length} files.`);
