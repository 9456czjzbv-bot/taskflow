import { TaskItem } from "./TaskItem";

export function TaskList ({taches, onSupprimer, onTerminer,}) {
    if(taches.length === 0) {
        return (
            <p className="empty-message">
                Aucune tâche pour le moment. Ajoute-en une pour commencer !
            </p>
        )
    }
    return <>
        <div>
            {taches.map((tache) => (
            <TaskItem
                key={tache.id}
                titre={tache.titre}
                onSupprimer={() => onSupprimer(tache.id)}
                onTerminer={() => onTerminer(tache.id)}
                terminee={tache.terminee}
            />
            ))}
        </div>
    </>
}