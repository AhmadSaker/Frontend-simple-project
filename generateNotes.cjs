const fs = require('fs');

const N = process.argv[2] ? parseInt(process.argv[2], 10) : 10;

const notes = [];

for (let i = 1; i <= N; i++) {
  notes.push({
    id: i,
    title: `Note ${i}`,
    author: {
      name: `Author ${i}`,
      email: `author${i}@example.com`
    },
    content: `This is the content for note ${i}.`
  });
}

const db = { notes };

fs.writeFileSync('./data/notes.json', JSON.stringify(db, null, 2));

console.log(`Generated ${N} notes in ./data/notes.json`);
