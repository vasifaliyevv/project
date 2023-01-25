const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");
const cors = require("cors");

const app = express();

const PORT = 7777;

/* Creating a new schema for the User model. */
const ProductSchema = new mongoose.Schema({
  name: String,
  surname: String,
  desc: String,
  position: String,
  src: String,
});



const ProductModel = mongoose.model("Product2", ProductSchema);

mongoose.set("strictQuery", false);
mongoose
  .connect(`mongodb+srv://af201:KlSC1UDnr1vp9XGa@cluster.oyql5cj.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));




const addProductSchema = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  desc: Joi.string().required(),
  position: Joi.string().required(),
  src: Joi.string().required(),
});

app.use(express.json());
app.use(cors())





/* Creating a new product and saving it to the database. */
app.post(
  "/api/product2",
  (req, res, next) => {
    const { error } = addProductSchema.validate(req.body);

    if (error == null) next();
    else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      res.status(422).json({ error: message });
    }
  },
  async (req, res) => {
    const newProduct = new ProductModel({ ...req.body });

    await newProduct.save();
    res
      .status(201)
      .send({ message: "Product succesfully added!", product: newProduct });
  }
);

/* Getting all the products from the database and sending them to the client. */
app.get("/api/product2", (req, res) => {
  ProductModel.find(null, "name surname desc position src", (error, products) => {
    if (error) return res.status(500).send({ error });
    res.send(products);
  });
});

/* Deleting the product with the id that is passed in the url. */
app.delete("/api/product2/:id", (req, res) => {
  if (req.params.id)
    CustomerModel.findByIdAndDelete(req.params.id, (error, data) => {
      if (error) return res.status(500).send({ error });

      res.send(data);
    });
});



/* Listening to the port 8080 and if it is running it will print "Server running on 8080" */
app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});

//KlSC1UDnr1vp9XGa