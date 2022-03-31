import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Post from "../components/Post";
import api from "../services/api"

export default function Dashboard() {
    // Variables
    const { state } = useLocation(); // state { id: int, email: string, name: string, password: string, admin: boolean }
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    // Get posts
    useEffect(() => {
        async function getPosts() {
            setIsLoading(true)
            await api.get("/posts/getAll")
                .then(res => {
                    // console.log(res)
                    setPosts(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
            setIsLoading(false)
        }

        getPosts();
    }, [])

    const postsElement = (posts.length != 0) ? posts.map((post, index) => <Post key={index} post={post} />) : "Não tem post"

    return (
        <div className="h-full">
            <Header user={state} />

            <div className="container">
                <h2 className="text-primary mb-4">Blog</h2>

                {(isLoading) ? 'Loading...'
                    : (posts) && postsElement}
            </div>
        </div>
    )
}