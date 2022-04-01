import { useEffect, useState } from "react";
import Header from "../components/Header";
import Post from "../components/Post";
import api from "../services/api"

export default function Home(props) {
    // Variables
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
console.log(props.user.admin)
    // Get posts
    useEffect(() => {
        setIsLoading(true)

        async function getPosts() {
            await api.get("/posts/getAll")
                .then(res => {
                    // console.log(res)
                    setPosts(res.data)
                })
                .catch(error => {
                    console.log(error)
                }).finally(() => {
                    setIsLoading(false)
                });
        }
        getPosts();

        return () => setIsLoading(false);
    }, [])

    const postsElement = (posts.length != 0) ? posts.map((post, index) => <Post key={index} admin={props.user.admin} post={post} />) : "Não tem post"

    return (
        <div className="h-full">
            <Header user={props.user} />

            <div className="container">
                <h2 className="pageTitle">Blog</h2>

                {(isLoading) ? 'Loading...'
                    : (posts) && postsElement}
            </div>
        </div>
    )
}