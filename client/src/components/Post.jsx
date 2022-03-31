export default function Post(props) {
    return (
        <div className="border-b py-4">
            <h3>{props.post.title}</h3>
            <p>{props.post.content}</p>
            <small>{props.post.author}</small>
        </div>
    )
}