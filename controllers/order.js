const { Order, CartItem } = require("../models/order");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
  //console.log("CREATE ORDER", req.body);
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((err, data) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(error) });
    }
    res.json(data);
  });
};

exports.listOrders = (req, res) => {
  Order.find()
    .populate("user", "_id name address")
    .sort("-created")
    .exec((err, order) => {
      if (err) {
        return res.status(400).json({ error: errorHandler(error) });
      }
      res.json(order);
    });
};
