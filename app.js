// Définition des modules
const express = require('express');
const app = express();
const port = 3000

app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views')
app.use(express.static(__dirname + '/src/public'));

// Render
app.get('/', (req, res) => {
  res.redirect('/home');
})

app.get('/home', (req, res) => {
  res.render("home.ejs")
})

app.get('/discord', (req, res) => {
  res.redirect("https://discord.gg/Nb8ybVveS9");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})