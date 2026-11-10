export async function verifierServeur() {
    const reponse = await fetch("http://localhost:5000/api/health");
    if (!reponse.ok) {
        throw new Error("Le serveur a rencontré une erreur.");
    }
    return await reponse.json();
}