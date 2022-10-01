const express = require("express");
const app = express();
var path = require("path");
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));

app.use("/public", express.static(path.join(__dirname, "/public")));

// Routes
const authRoute = require("./routes/auth.route");

app.use("/api/", authRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
