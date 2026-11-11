export async function verifierServeur() {
    const reponse = await fetch("http://localhost:5000/api/health");

    if (!reponse.ok) {
        throw new Error("Le serveur a rencontré une erreur.");
    }

    return await reponse.json();
}

export async function ajouterTache(titre) {
    const reponse = await fetch("http://localhost:5000/api/taches", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ titre })
    });

    if (!reponse.ok) {
        throw new Error("Impossible d'ajouter la tâche.");
    }

    return await reponse.json();
}

export async function recupererTaches() {
    const reponse = await fetch("http://localhost:5000/api/taches");

    if (!reponse.ok) {
        throw new Error("Impossible de récupérer les tâches.");
    }

    return await reponse.json();
}

export async function supprimerTacheAPI(id) {
    const reponse = await fetch(`http://localhost:5000/api/taches/${id}`, {
        method: "DELETE"
    });

    if (!reponse.ok) {
        throw new Error("Impossible de supprimer la tâche.");
    }

    return await reponse.json();
}
