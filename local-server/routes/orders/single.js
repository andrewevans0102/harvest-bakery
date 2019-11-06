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
  res.status(200).send(ownerOrders);
};

const createOrder = async (req, res) => {
  const orders = await util.readFile(ordersFile);
  const createOrder = req.body;
  createOrder.id = orders.length + 1;
  orders.push(createOrder);

  await util.writeFile(ordersFile, JSON.stringify(orders));
  res.status(200).send('success');
};

const deleteOrder = async (req, res) => {
  const orders = await util.readFile(ordersFile);
  const deleteId = parseInt(req.params.orderId, 10);
  const updateOrders = orders.filter(order => order.id !== deleteId);
  if (updateOrders.length === orders.length) {
    res.status(500).send('id was not found');
  }

  await util.writeFile(ordersFile, JSON.stringify(updateOrders));
  res.status(200).send('success');
};

module.exports = {
  byOwner,
  byId,
  createOrder,
  deleteOrder
};
