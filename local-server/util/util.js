const fs = require('fs');

const readFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function(err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const writeFile = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', function(err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = {
  readFile,
  writeFile
};
