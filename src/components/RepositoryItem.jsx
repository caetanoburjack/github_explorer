export function RespositoryItem(props) {
    return (
        <li className='eachItem'>
            <strong>{props?.repository?.name ?? 'DefaultName'}</strong>
            <p>{props?.repository?.description ?? 'DefaultName'}</p>

            <a href={props?.repository?.link ?? 'DefaultName'}>
                {props?.repository?.name ?? 'DefaultName'}
            </a>
        </li>
    )
}