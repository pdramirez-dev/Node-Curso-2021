const express = require("express");
const hbs = require("hbs");

const app = express();
const port = 3000;

// midleware Servir conenido esattico
app.set("view engine", "hbs");
/* hbs.registerPartials(__dirname + "/views/partials", function (err) {
  console.log(err);
}); */
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render(
    'home',{
      nombre: 'Pablo E',
      titulo: 'Curso de Node'
    }
  );
});

app.get("/elements", (req, res) => {
  res.render(
    'elemnts',{
      nombre: 'Pablo E',
      titulo: 'Curso de Node'
    }
  );});
app.get("/generic", (req, res) => {
  res.render(
    'generic',{
      nombre: 'Pablo E',
      titulo: 'Curso de Node'
    }
  );});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
