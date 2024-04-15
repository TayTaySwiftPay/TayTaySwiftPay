{{javascript}}
import { readFileSync, writeFileSync } from 'fs';

function readDb(dbName = 'db.json') {
    try {
        const data = readFileSync(dbName, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading database:', err);
        return null;
    }
}

function writeDb(obj, dbName = 'db.json') {
    if (!obj) {
        console.error('Please provide data to save');
        return;
    }
    try {
        writeFileSync(dbName, JSON.stringify(obj)); // overwrites current data
        console.log('SAVE SUCCESS');
    } catch (err) {
        console.error('Failed to write to database:', err);
    }
}

export { readDb, writeDb };
