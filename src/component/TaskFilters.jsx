export function TaskFilters ({filtre, onChangerFiltre}) {
    return (
        <div className="task-filters">
            <button
            className={filtre === "Toutes" ? "active" : ""}
            onClick={() => onChangerFiltre("Toutes")}
            >
                Toutes
            </button >
            <button 
            className={filtre === "À faire" ? "active" : ""}
            onClick={() => onChangerFiltre("À faire")}
            >
                À faire
            </button>
            <button 
            className={filtre === "Terminées" ? "active" : ""}
            onClick={() => onChangerFiltre("Terminées")}
            >
                Terminées
            </button>
        </div>
        )
}