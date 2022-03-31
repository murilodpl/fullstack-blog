export default function Post(props) {
    return (
        <div className="border-b py-4">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}