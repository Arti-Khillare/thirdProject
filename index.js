const express = require("express");
const app = express();
const mongoose = require("mongoose");
const route = require("./routes/route");

app.use(express.json());
app.use("/", route);

try {
  //insert your MONGO ATLAS string here :-
  mongoose.connect("mongodb+srv://ArtiKhillare:jR067NcnClM96Fp1@cluster0.wi9j2.mongodb.net/Project3-Db?retryWrites=true&w=majority", {
    useNewUrlParser: true,
  });
  console.log(`MongoDB connection successful`);
} catch (error) {
  console.log(error);
}

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Express App running on port ${port} `));
