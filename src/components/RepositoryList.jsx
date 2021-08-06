import { RespositoryItem } from "./RepositoryItem";

const repository = {
    name: 'Repository Name',
    description: 'Description',
    link: 'Link',
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>
                Repository List
            </h1>
            <ul>
                <RespositoryItem repository={repository} />
                <RespositoryItem />
                <RespositoryItem />
                <RespositoryItem />
            </ul>
        </section>
    );
}