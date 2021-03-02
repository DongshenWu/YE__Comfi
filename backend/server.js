import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
import products from "./data/products.js";

dotenv.config();
const app = express();
app.use(express.json());
const stripe = Stripe(
  "sk_test_51ICuKuKgM9REhsAZUBIiZVJ7hm4LgWh1C49Nv0rVXKyDJq5o6jkJLGc3cWPyWKdDJgTxAkgfq0PfzOo5iNmcYtbi005iSQzCpi"
);

app.post("/create-checkout-session", async (req, res) => {
  const price = Math.round(req.body.price * 100);
  const quantity = req.body.quantity;
  const name = `Comfi Back Support: \r black x${quantity.black}, blue x${quantity.blue}`;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: ["GB"],
    },
    line_items: [
      {
        price_data: {
          currency: "gbp",
          product_data: {
            name: name,
          },
          unit_amount: price,
        },
        quantity: quantity.black + quantity.blue,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success.html",
    cancel_url: "http://localhost:3000/product/1",
  });

  res.json({ id: session.id });
});

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(5000, () => {
  console.log("running");
});
