import { useEffect, useState } from "react";
import Header from "../components/Header";
import Post from "../components/Post";
import api from "../services/api"

export default function Home(props) {
    // Variables
    const [posts, setPosts] = useState([])
    const [removePost, setRemovePost] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    // Get posts
    useEffect(() => {
        setIsLoading(true)

        async function getPosts() {
            if (!props.user) {
                return console.log(props)
            }
            await api.get(`/posts/getAll/${props.user.id}`)
                .then(res => {
                    // console.log(res)
                    setPosts(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setIsLoading(false)
                });
        }
        getPosts();

        return () => setIsLoading(false);
    }, [removePost])

    const postsElement = (posts.length != 0) ? posts.map((post, index) => <Post key={index} post={post} setRemovePost={setRemovePost} />) : "Não tem post"

    return (
        <div className="h-full">
            <Header user={props.user} />

            <div className="container">
                <h2 className="text-primary">My Posts</h2>

                {(isLoading) ? 'Loading...'
                    : (posts) && postsElement}
            </div>
        </div>
    )
}