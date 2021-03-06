import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
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

    const postsElement = (posts.length != 0) ? posts.map((post, index) => <Post key={index} post={post} myposts={true} setRemovePost={setRemovePost} />) : <p className="my-4">Nothing found.</p>

    return (
        <div className="page">
            <Header user={props.user} />

            <div className="container">
                <div className="flex justify-between items-center   pageTitle">
                    <h2>My Posts</h2>
                    <NavLink to="/newPost" className="p-1 text-green-500 border border-green-500 transition-all hover:bg-green-500 hover:text-white" >New Post</NavLink>
                </div>

                {(isLoading) ? <div className="flex justify-center"><div className="lds-roller invert"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
                    : (posts) && postsElement}
            </div>

            <Footer />
        </div>
    )
}