// index.js
// #!/usr/bin/env node

const express = require("express");
const app = express();

const db = [];

const log = () => {};

app.use(express.json());

app.use("/:obj/:id", (req, res) => {
  // app.use("/", (req, res) => {

  if (isNaN(req.params.id)) {
    res.send("o ID deve ser um número!");
  }
  if (!isNaN(req.params.obj)) {
    res.send("o OBJ deve ser uma string identificador do tipo do objeto!");
  }

  let id = req.params.id;
  let list = db[req.params.obj];

  if (list == undefined) {
    list = [];
    db[req.params.obj] = list;
  }

  switch (req.method) {
    case "GET":
      let objget = list.find((e) => e.id == id);
      res.json(objget);
      log(db);
      break;
    case "DELETE":
      let obj = list.find((e) => e.id == id);
      list.splice(list.indexOf(obj), 1);
      res.sendStatus(204);
      log(db);
      break;
    case "PUT":
      let _obj = list.find((e) => e.id == id);
      list.splice(list.indexOf(_obj), 1, req.body);
      log(db);
      break;
  }
});

app.use("/:obj", (req, res) => {
  if (!isNaN(req.params.obj)) {
    res.send("o OBJ deve ser uma string identificador do tipo do objeto!");
  }

  let list = db[req.params.obj];

  if (list == undefined) {
    list = [];
    db[req.params.obj] = list;
  }

  switch (req.method) {
    case "GET":
      res.json(list);
      log(db);
      break;
    case "POST":
      list.push(req.body);
      res.status(202).send("Armazenado.");
      log(db);
      break;
  }
});

app.listen(3000, () => console.log("Ouvindo na porta 3000"));
