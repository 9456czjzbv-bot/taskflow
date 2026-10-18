import { Header } from "./headers"
import { useState } from "react"
function App() {
  const [taches, setTaches] = useState([
  {
    id: 1,
    titre: "Apprendre React",
    terminee: false
  },
  {
    id: 2,
    titre: "Comprendre les composants",
    terminee: false
  },
  {
    id: 3,
    titre: "Construire une API",
    terminee: false
  }
])
const [filtre, setFiltre] = useState("Toutes")
const [nouvelleTache, setNouvelleTache] = useState("")
const [erreur, setErreur] = useState("")
const ajouterTache = () => {
  if(nouvelleTache.trim() === ""){
    setErreur("Veuillez saisir une tache avant de continuer.")
    return
  }
  const titreNormalise = nouvelleTache.trim().toLowerCase()

  const doublonExiste = taches.some(
    tache => tache.titre.trim().toLowerCase() === titreNormalise
  )

  if (doublonExiste) {
    setErreur("Cette tâche existe déjà.")
    return
  }
  setErreur("")
  const nouvelle = {
    id: Date.now(),
    titre: nouvelleTache,
    terminee: false
  }
  setTaches([...taches, nouvelle])
  setNouvelleTache("")
}
const supprimerTache = (id) => {
  setTaches(taches.filter(tache => tache.id !== id))
}
const terminerTache = (id) => {
  setTaches(taches.map(tache=>
    tache.id === id ? {...tache, terminee: !tache.terminee}
    : tache
  ))
}
const nombreTerminees = taches.filter(tache => tache.terminee).length
const nombreRestantes = taches.length - nombreTerminees
const tachesFiltrees = taches.filter(tache => {
  if (filtre === "À faire") {
    return tache.terminee === false
  }

  if (filtre === "Terminées") {
    return tache.terminee === true
  }

  return true
})

  return (
    <div>
      <Header titre="Taskflow" bienvenue="Organise tes taches simplement"></Header>
      <p>Nombre total : {taches.length}</p>
      <p>Tâches terminées : {nombreTerminees}</p>
      <p>Tâches restantes : {nombreRestantes}</p>
      <div>
        <button onClick={() => setFiltre("Toutes")}>
          Toutes
        </button>

        <button onClick={() => setFiltre("À faire")}>
          À faire
        </button>

        <button onClick={() => setFiltre("Terminées")}>
          Terminées
        </button>
      </div>
      <ul>
        {tachesFiltrees.map(tache =><li key={tache.id}>
        <input
          type="checkbox"
          checked={tache.terminee}
          onChange={() => terminerTache(tache.id)}
        />

        <span
          style={{
            textDecoration: tache.terminee ? "line-through" : "none"
          }}
        >
          {tache.titre}
        </span>

  <button onClick={() => supprimerTache(tache.id)}>
    Supprimer
  </button>
  </li>)}
</ul>
      <input type="text" 
      value={nouvelleTache} 
      onChange={(event) => setNouvelleTache(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          ajouterTache()
        }
      }}
      />
      {erreur !== "" && <p>{erreur}</p>}
      <button onClick={ajouterTache}>Ajouter</button>
    </div>
  )

}

export default App