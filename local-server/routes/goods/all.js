const fs = require('fs');
const goodsFile = './data/goods.json';

module.exports = (req, res) => {
  const fileData = fs.readFileSync(goodsFile, 'utf8');
  res.status(200).send(JSON.parse(fileData));
};
