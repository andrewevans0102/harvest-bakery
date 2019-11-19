const ordersFile = './data/orders.json';
const util = require('../../util/util');

const byOwner = async (req, res) => {
  const orders = await util.readFile(ordersFile);
  const ownerOrders = orders.filter(
    order => order.owner === parseInt(req.params.ownerId, 10)
  );
  res.status(200).send(ownerOrders);
};

const byId = async (req, res) => {
  const orders = await util.readFile(ordersFile);
  const ownerOrders = orders.filter(
    order => order.id === parseInt(req.params.orderId, 10)
  );
  res.status(200).send(ownerOrders[0]);
};

const createOrder = async (req, res) => {
  const orders = await util.readFile(ordersFile);
  const createOrder = req.body;
  createOrder.id = orders.length + 1;
  orders.push(createOrder);

  await util.writeFile(ordersFile, JSON.stringify(orders));
  res.status(200).send(JSON.stringify('success'));
};

const deleteOrder = async (req, res) => {
  const orders = await util.readFile(ordersFile);
  const deleteId = parseInt(req.params.orderId, 10);
  const orderIndex = orders.findIndex(order => order.id === deleteId);
  if (orderIndex === -1) {
    res.status(500).send(JSON.stringify('id was not found'));
  }
  orders.splice(orderIndex, 1);
  await util.writeFile(ordersFile, JSON.stringify(orders));

  res.status(200).send(JSON.stringify('success'));
};

module.exports = {
  byOwner,
  byId,
  createOrder,
  deleteOrder
};
