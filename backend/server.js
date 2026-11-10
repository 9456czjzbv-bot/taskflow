const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({
        message: "Le serveur TaskFlow fonctionne correctement !"
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});