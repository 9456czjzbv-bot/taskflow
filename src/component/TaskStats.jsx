export function TaskStats({ total, aFaire, terminees }) {
  return (
    <div className="task-stats">
      <div className="stat-card">
        <h3>{total}</h3>
        <p>Total des tâches</p>
      </div>

      <div className="stat-card">
        <h3>{aFaire}</h3>
        <p>À faire</p>
      </div>

      <div className="stat-card">
        <h3>{terminees}</h3>
        <p>Terminées</p>
      </div>
    </div>
  )
}