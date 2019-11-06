const fs = require('fs');

const readFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data));
    });
  });
};

const writeFile = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

module.exports = {
  readFile,
  writeFile
};
