export function RespositoryItem(props) {
    return (
        <li className='eachItem'>
            <strong>{props?.repository?.name ?? 'DefaultName'}</strong>
            <p>{props?.repository?.description ?? 'DefaultName'}</p>

            <a target='_blank' href={props?.repository?.html_url}>
                Acessar Repositório
            </a>
        </li>
    )
}