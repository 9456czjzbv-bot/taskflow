import { useState } from "react"
import Header from "./component/headers"
import { TaskForm } from "./component/TaskForm"
import { TaskList } from "./component/TaskList"
function App() {
  const [taches, setTaches] = useState([
    {id: 1, titre: "Apprendre React"},
    {id: 2, titre: "comprendre les composants"},
    {id: 3, titre: "Construire une API"}
  ])
  const ajouterTache = (titre) => {
    const existeDeja = taches.some(
      (tache) => tache.titre.toLowerCase() === titre.toLowerCase()
    )

    if (existeDeja) {
      alert("cette tache existe deja")
    }

    const nouvelleTache = {
      id: Date.now(),
      titre: titre
    }
    setTaches([...taches, nouvelleTache])
  }
  const supprimerTache = (id) => {
    setTaches(
      taches.filter((tache) => tache.id !== id)
    )
  }
  return <>
    <div>
      <Header />
      <TaskForm onAjouter={ajouterTache} type = "text"  placeholder = "Quelle tache veux-tu réaliser"/>
      <TaskList 
        taches={taches}
        onSupprimer={supprimerTache}
      />
    </div>
  </>
}

export default App