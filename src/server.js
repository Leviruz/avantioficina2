const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/routes");
const path = require("path");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/index.html"));
});

app.get("/views/professores.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/professores.html"));
});

app.get("/views/alunos.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/alunos.html"));
});

app.get("/views/boletins.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/boletins.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/index.html"));
});

app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
