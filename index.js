const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Project routes
const productRoutes = require("./src/routes/Product.routes");
app.use("/products", productRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
}
main()
  .then(() => console.log("Mongodb collection successfully"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
