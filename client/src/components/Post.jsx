import api from "../services/api"

export default function Post(props) {
    // Functions
    async function deletePost(id) {
        await api.delete('/posts/delete', { data: { id: id } })
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                props.setRemovePost(prevBool => !prevBool)
            })
    }

    return (
        <div className="border-b py-4 relative">
            <h3>{props.post.title}</h3>
            <p>{props.post.content}</p>
            <small>{props.post.author}</small>

            <button onClick={() => deletePost(props.post.id)} className="absolute top-0 right-0 m-4 text-red-500 transition-all hover:text-red-700">Deletar</button>
        </div>
    )
}