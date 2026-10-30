export function TaskItem({titre, onSupprimer, onTerminer, terminee}) {
    return (
        <div className={`task-item ${terminee ? "completed" : ""}`}>
            <span className="task-title">{titre}</span>
            <div className="task-actions">
            <button 
                className="complete-btn" 
                onClick={onTerminer}
            >
                {terminee ? "Annuler" : "Terminer"}
            </button>
            <button
                className="delete-btn" 
                onClick={onSupprimer}
            > 
                Supprimer
            </button>
            </div>
        </div>
    )
}