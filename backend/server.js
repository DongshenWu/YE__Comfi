import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
import products from "./data/products.js";

dotenv.config();
const app = express();
app.use(express.json());
const stripe = Stripe(
  "sk_test_51IHb6EBsADiibGEUljlWONtqREt7WYPPWBJt3TrbdyzSvoMbpdG0cUTw9sYY3xUxoyNXbQjDdWtfG8qazoYSdVf3007bPZloxQ"
);

app.post("/create-checkout-session", async (req, res) => {
  const price = Math.round(req.body.price * 100);
  const quantity = req.body.quantity;

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
            name: "Back support - Black",
          },
          unit_amount: price,
        },
        quantity: quantity.black,
      },
      {
        price_data: {
          currency: "gbp",
          product_data: {
            name: "Back support - Blue",
          },
          unit_amount: price,
        },
        quantity: quantity.blue,
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

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(5000, () => {
  console.log("running");
});
