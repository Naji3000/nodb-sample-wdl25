const express = require("express");
const app = express();
const wishController = require("./controllers/wishController");

app.use(express.json());

app.get("/api/wishes", wishController.getWishes);
app.post("/api/wishes", wishController.addWish);
app.delete("/api/wishes/:id", wishController.deleteWish);

app.listen(5050, () => {
  console.log("Listening on 5050");
});
