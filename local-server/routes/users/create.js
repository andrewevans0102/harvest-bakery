const fs = require('fs');
const usersFile = './data/users.json';

module.exports = (req, res) => {
  const fileData = fs.readFileSync(usersFile, 'utf8');
  let usersData = JSON.parse(fileData);
  const user = req.body;
  user.id = usersData.length + 1;
  usersData.push(user);
  fs.writeFileSync(usersFile, JSON.stringify(usersData));
  res.status(200).send('success');
};
