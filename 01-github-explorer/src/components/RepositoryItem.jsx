export function RepositoryItem({ repository }) {
    return (
        <li>
            <strong>{repository.name}</strong>
            <p>{repository.title}</p>

            <a href={repository.link}>Acessar Repositório</a>
        </li>
    );
}
