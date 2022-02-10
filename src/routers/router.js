const pg = require("../db/postgresql");
const express = require("express");
const router = new express.Router();

router.post("/users", (req, res) => {
  let qry =
    "INSERT INTO table1(name,id,class,lastname) VALUES ('ali',10,6,'khan')";
  pg.query(qry, (err, result) => {
    if (err) throw err;
    else {
      res.send(result);
    }
  });
});

router.get("/users", (req, res) => {
  let qry = "SELECT * FROM table1";
  pg.query(qry, (err, result) => {
    if (err) throw err;
    else {
      res.send(result.rows);
    }
  });
  res.send("get requrest");
});

router.patch("/users", (req, res) => {
  let qry = "UPDATE table1 SET name='ahmedkhan' WHERE name='ahmed'";
  pg.query(qry, (err, result) => {
    if (err) throw err;
    else {
      res.send("successfully updated");
    }
  });
});
router.delete("/users", (req, res) => {
  let qry = "DELETE FROM table1 WHERE name='ahmedkhan'";
  pg.query(qry, (err, result) => {
    if (err) throw err;
    else {
      res.send("successfully deleted");
    }
  });
});
module.exports = router;
