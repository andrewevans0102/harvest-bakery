const fs = require('fs');
const ordersFile = './data/orders.json';
const util = require('../../util/util');

module.exports = async (req, res) => {
  const fileData = await util.readFile(ordersFile);
  res.status(200).send(JSON.parse(fileData));
};
