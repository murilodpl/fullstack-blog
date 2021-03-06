import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Post from "../components/Post";
import api from "../services/api"

export default function Home(props) {
    // Variables
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [removePost, setRemovePost] = useState(false)

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
    }, [removePost])

    const postsElement = (posts.length != 0) ? posts.map((post, index) => <Post key={index} admin={props.user.admin} setRemovePost={setRemovePost} post={post} />) : <p className="my-4">Nothing found.</p>

    return (
        <div className="page">
            <Header user={props.user} />

            <div className="container">
                <h2 className="pageTitle">Posts</h2>

                {(isLoading) ? <div className="flex justify-center"><div className="lds-roller invert"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
                    : (posts) && postsElement}
            </div>

            <Footer />
        </div>
    )
}