export function TaskFilters ({filtre, onChangeFiltre}) {
    return <>
        <div>
            <button onClick={() => onChangeFiltre("Toutes")}>
                Toutes
            </button >
            <button onClick={() => onChangeFiltre("A faire")}>
                A faire 
            </button>
            <button onClick={() => onChangeFiltre("Terminées")}>
                Terminées
            </button>
        </div>
    </>
}