const postgresql = require("pg").Pool;
const pg = new postgresql({
  user: "postgres",
  password: "12345678",
  database: "users",
  host: "localhost",
  port: 5432,
});
pg.connect((err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log("postgres connected");
  }
});
module.exports = pg;
