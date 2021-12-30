interface RepositoryItemProps {
    repository: {
        name: string;
        title: string;
        html_url: string;
    }
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
    return (
        <li>
            <strong>{repository.name}</strong>
            <p>{repository.title}</p>

            <a href={repository.html_url}>Acessar Repositório</a>
        </li>
    );
}
