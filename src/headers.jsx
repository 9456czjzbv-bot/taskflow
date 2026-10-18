export function Header({titre, bienvenue}) {
    return (
    <header>
        <h1>{titre}</h1>
        <p>{bienvenue}</p>
        <nav>
            Accueil | Mes taches | Profil
        </nav>
    </header>
    )
}