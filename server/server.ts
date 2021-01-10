import express from "express";

// cconst express = require('express') //js

const app = express();

app.get("/", (req: any, res: any) => {
  res.send("ok");
});

app.listen(1337);
