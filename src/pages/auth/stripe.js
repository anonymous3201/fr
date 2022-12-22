const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51MGTtdJh0puFWg8HFQkBYAljq3d1bkOFMbKmxmbDIrhp9IFidcBdBO9O3oXJ1or6U6dFD32sVMoC93mDzo8lRd9k00wPGAd0eb')
require("dotenv").config();
const router = express.Router()
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:4242/success',
    cancel_url: 'http://localhost:4242/cancel',
  });

  res.redirect(303, session.url);
});
