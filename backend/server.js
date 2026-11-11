const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express()

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({
        message: "Le serveur TaskFlow fonctionne correctement !"
    });
});
app.get("/api/taches", async (req, res) => {
    try {
        const [taches] = await db.query("SELECT * FROM taches");

        res.json(taches);
    } catch (erreur) {
        console.error(erreur);
        res.status(500).json({
            message: "Erreur lors de la récupération des tâches"
        });
    }
});
app.post("/api/taches", async (req, res) => {
    try {
        const { titre } = req.body;

        if (!titre || !titre.trim()) {
            return res.status(400).json({
                message: "Le titre de la tache est obligatoire."
            })
        }

        const [resultat] = await db.query(
            "INSERT INTO taches (titre) VALUES (?)",
            [titre.trim()]
        )
        res.status(201).json({
            id: resultat.insertId,
            titre: titre.trim(),
            terminee: false
        })
    } catch (e) {
        console.error(e)
        res.status(500).json({

            message: "Erreur lors de l'ajout de la tache."
        })
    }

})

app.delete("/api/taches/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                message: "Identifiant invalide."
            });
        }

        const [resultat] = await db.query(
            "DELETE FROM taches WHERE id = ?",
            [id]
        );

        if (resultat.affectedRows === 0) {
            return res.status(404).json({
                message: "Tâche introuvable."
            });
        }

        res.json({
            message: "Tâche supprimée avec succès."
        });

    } catch (erreur) {
        console.error(erreur);

        res.status(500).json({
            message: "Erreur lors de la suppression."
        });
    }
});


db.getConnection()
    .then((connection) => {
        console.log("Connexion à MySQL réussie !");
        connection.release();
    })
    .catch((erreur) => {
        console.error("Erreur MySQL :", erreur.message);
    });

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});