export function TaskItem({titre, onSupprimer}) {
    return (
        <div>
            <span>{titre}</span>
            <button>Terminer </button>
            <button onClick={onSupprimer}> Supprimer</button>
        </div>
    )
}