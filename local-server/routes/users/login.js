const usersFile = './data/users.json';
const util = require('../../util/util');

module.exports = async (req, res) => {
  const users = await util.readFile(usersFile);
  const foundUser = users.find(user => user.email === req.body.email);
  if (foundUser.email === undefined) {
    res.status(500).send('user was not found');
  } else {
    if (foundUser.password === req.body.password) {
      res.status(200).send({
        token: 'token_12345',
        loginId: foundUser.id
      });
    } else {
      res.status(500).send('incorrect password');
    }
  }
};
