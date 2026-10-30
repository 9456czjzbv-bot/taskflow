export function TaskItem({titre, onSupprimer, onTerminer, terminee}) {
    return (
        <div>
            <span>{titre}</span>
            <button 
            onClick={onTerminer}
            >
                {terminee ? "Annuler" : "Terminer"}
            </button>
            <button 
                onClick={onSupprimer}
            > 
                Supprimer
            </button>
        </div>
    )
}