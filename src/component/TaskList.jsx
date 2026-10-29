import { TaskItem } from "./TaskItem";

export function TaskList ({taches, onSupprimer}) {
    return <>
        <div>
            {taches.map((tache) => (
            <TaskItem
                key={tache.id}
                titre={tache.titre}
                onSupprimer={() => onSupprimer(tache.id)}
            />
            ))}
        </div>
    </>
}