const { default: Stripe } = require("stripe");
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require('../middleWares/requireLogin');

module.exports = (app) => {
  app.post("/api/stripe", requireLogin,  async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id,
    });

    const { user } = req;
    user.credits += 5;
    const result = await user.save({ new: true });
    return res.json(result);
  });
};
