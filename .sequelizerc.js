require('@babel/register')({
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }]
    ]
});
const path = require('path');

const DB_PATH = 'dist/db'; // use dist instead of src directory

module.exports = {
    'config': path.resolve(DB_PATH, 'config.json'),
    'models-path': path.resolve(DB_PATH, 'models'),
    'seeders-path': path.resolve(DB_PATH, 'seeders'),
    'migrations-path': path.resolve(DB_PATH, 'migrations')
};