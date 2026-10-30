import { TaskItem } from "./TaskItem";

export function TaskList ({taches, onSupprimer, onTerminer,}) {
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