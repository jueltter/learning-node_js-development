const filehandle = require('fs').promises;

var getKeyFromFile = (file) => {
    return filehandle.readFile(file, 'utf8');
}

module.exports.getKeyFromFile = getKeyFromFile;