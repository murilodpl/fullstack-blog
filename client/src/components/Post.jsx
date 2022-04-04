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
        <div className="border p-4 my-4">
            <div className="flex justify-between items-center mb-3">
                <h3>{props.post.title}</h3>
                {(props.myposts || props.admin) && <button onClick={() => deletePost(props.post.id)} className="p-1 text-red-500 border border-red-500 transition-all hover:bg-red-500 hover:text-white">Delete</button>}
            </div>
            <p className="whitespace-pre-line">{props.post.content}</p>
            <small>{props.post.author}</small>
        </div>
    )
}