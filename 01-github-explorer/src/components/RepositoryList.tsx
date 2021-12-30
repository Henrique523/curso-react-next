import {RepositoryItem} from "./RepositoryItem";
import '../styles/repositories.scss';
import {useEffect, useState} from "react";

interface Repository {
    name: string;
    title: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories
                    .map((repository, index) => <RepositoryItem repository={repository} key={index} />)
                }
            </ul>
        </section>
    )
}
