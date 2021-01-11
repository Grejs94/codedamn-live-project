import express from "express";
import bodyParser from "body-parser";
// we can get json payload from the request
import cors from "cors";
// enable console error with duble localhost 3000 and 1337 (cors policy)

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}
// only in dev mode we need this because when we deploy to AWS we will have only one server

app.use(bodyParser.json());
// enable us to use body from requests from the client site

app.get("/", (req: any, res: any) => {
  res.send("ok");
});

app.post("/api/register", (req, res) => {
  console.log(req.body);

  res.json({ status: "ok" });
});

app.listen(1337);
