const fs = require('fs');
const usersFile = './data/users.json';

// app.get('/logout', (req, res, next) => {
//   res.status(200).send('logout successful');
// });

module.exports = (req, res) => {
  const fileData = fs.readFileSync(usersFile, 'utf8');
  let users = JSON.parse(fileData);
  const foundUser = users.find(user => (user.email = req.body.email));

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
