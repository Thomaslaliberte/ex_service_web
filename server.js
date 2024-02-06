const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json())
app.use('/api/pokemons', require('./src/routes/api/pokemons'));

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});