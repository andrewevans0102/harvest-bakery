const ordersFile = './data/orders.json';
const util = require('../../util/util');

module.exports = async (req, res) => {
  const orders = await util.readFile(ordersFile);
  res.status(200).send(orders);
};
