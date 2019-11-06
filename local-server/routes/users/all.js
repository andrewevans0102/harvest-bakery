const fs = require('fs');
const usersFile = './data/users.json';

module.exports = (req, res) => {
  const fileData = fs.readFileSync(usersFile, 'utf8');
  res.status(200).send(JSON.parse(fileData));
};
