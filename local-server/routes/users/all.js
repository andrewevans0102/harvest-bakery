const usersFile = './data/users.json';
const util = require('../../util/util');

module.exports = async (req, res) => {
  const users = await util.readFile(usersFile);
  res.status(200).send(users);
};
