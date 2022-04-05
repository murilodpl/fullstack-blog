import api from "../services/api"
import { useState } from "react"

export default function Post(props) {
    // Variables
    const [isReadMore, setIsReadMore] = useState(true)
    const text = props.post.content;

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
    function toggleReadMore() {
        setIsReadMore(!isReadMore)
    }

    return (
        <div className="border border-gray-300 p-4 my-4">
            <div className="flex justify-between items-center mb-3">
                <h3>{props.post.title}</h3>
                {(props.myposts || props.admin) && <button onClick={() => deletePost(props.post.id)} className="p-1 text-red-500 border border-red-500 transition-all hover:bg-red-500 hover:text-white">Delete</button>}
            </div>
            <p className="whitespace-pre-line">
                {(isReadMore && text.length > 150) ? text.slice(0, 100) : text}

                {(text.length > 150) && <span onClick={toggleReadMore} className="cursor-pointer text-blue-500 transition-all hover:text-blue-700">
                {isReadMore ? " Read more" : " Show less"}
                </span>}
            </p>
            <small>{props.post.name}</small>
        </div>
    )
}