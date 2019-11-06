const goodsFile = './data/goods.json';
const util = require('../../util/util');

module.exports = async (req, res) => {
  const goods = await util.readFile(goodsFile);
  res.status(200).send(goods);
};
