const { writeFileSync } = require('fs');

const file = './dist/package.json';
const data = '{"type":""}';

writeFileSync(file, data);