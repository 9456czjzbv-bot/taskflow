import { useState } from "react"

export function TaskForm({type, placeholder, onAjouter}) {
    const [nouvelleTache, setNouvelleTache] = useState("")
    const gererSoumission = (e) => {
        e.preventDefault()
        const titre = nouvelleTache.trim()
        if (titre === "") {
            return
        }
        onAjouter(titre)
        setNouvelleTache("")
    }
    return (
        <form onSubmit={gererSoumission} className="task-form">
            <input 
                type={type}
                placeholder={placeholder}
                value={nouvelleTache} 
                onChange={(e) => setNouvelleTache(e.target.value)}
        />
        <button type="submit">
            Ajouter
        </button>
        </form>
    )
}