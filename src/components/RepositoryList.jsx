import { RespositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repositories.scss'

//https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos').then(response => response.json()).then(data => setRepositories(data))
    }, [])
    console.log(repositories);

    return (
        <section className="repository-list">
            <h1>
                Repositories List
            </h1>
            <ul>
                {repositories.map(repository => <RespositoryItem key={repository.name} repository={repository} />)}

            </ul>
        </section>
    );
}