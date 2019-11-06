const usersFile = './data/users.json';
const util = require('../../util/util');

module.exports = async (req, res) => {
  const usersData = await util.readFile(usersFile);
  const user = req.body;
  user.id = usersData.length + 1;
  usersData.push(user);
  await util.writeFile(usersFile, JSON.stringify(usersData));
  res.status(200).send('success');
};
