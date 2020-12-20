const serverless = require("serverless-http");

import * as bodyParser from "body-parser";
import * as express from "express";

const appname = "app";

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(`/.netlify/functions/${appname}`, router);

router.get("/", (req, res) => {
  res.json({ message: "Hi" });
});

module.exports.handler = serverless(app);
export { app };
