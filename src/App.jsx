import { useState } from "react"
import Header from "./component/headers"
import { TaskForm } from "./component/TaskForm"
import { TaskList } from "./component/TaskList"
import { TaskFilters } from "./component/TaskFilters"
function App() {
  const [taches, setTaches] = useState([
    {id: 1, titre: "Apprendre React", terminee: false},
    {id: 2, titre: "comprendre les composants", terminee: false},
    {id: 3, titre: "Construire une API", terminee: false}
  ])
  const [filtre, setFiltre] = useState("Toutes")
  const ajouterTache = (titre) => {
    const existeDeja = taches.some(
      (tache) => tache.titre.toLowerCase() === titre.toLowerCase()
    )

    if (existeDeja) {
      alert("cette tache existe deja")
      return
    }

    const nouvelleTache = {
      id: Date.now(),
      titre: titre,
      terminee: false
    }
    setTaches([...taches, nouvelleTache])
  }
  const supprimerTache = (id) => {
    setTaches(
      taches.filter((tache) => tache.id !== id)
    )
  }
  const terminerTache = (id) => {
    setTaches(
      taches.map((tache) => 
      tache.id === id
      ? {...tache, terminee: !tache.terminee}
      : tache
      )
    )
  }
  const tachesFiltrees = taches.filter((tache) =>  {
    if (filtre === "A faire") {
      return !tache.terminee
    }
    if (filtre === "Terminées") {
      return tache.terminee
    }

    return true
  })
  return <>
    <div>
      <Header />
      <TaskForm onAjouter={ajouterTache} type = "text"  placeholder = "Quelle tache veux-tu réaliser"/>
      <TaskFilters 
        filtre={filtre} 
        onChangeFiltre={setFiltre} 
      />
      <TaskList 
        taches={taches}
        onSupprimer={supprimerTache}
        onTerminer={terminerTache}
      />
    </div>
  </>
}

export default App