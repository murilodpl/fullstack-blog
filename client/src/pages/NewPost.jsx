import { useState } from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../services/api"
import { useNavigate } from "react-router-dom";

export default function NewPost(props) {
    // Variable
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        author: props.user.id
    })
    const [check, setCheck] = useState({
        title: false,
        content: false,
        isDuplicate: false,
        err: false,
        isLoading: false,
        success: false
    })

    // Function
    function handleChange(e) {
        setCheck({
            title: false,
            content: false,
            isDuplicate: false,
            err: false,
            isLoading: false
        })

        let { name, value } = e.target

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function registerPost(e) {
        e.preventDefault()

        // If filled
        if (formData.title == "") {
            return setCheck(prevCheck => ({ ...prevCheck, title: true }))
        } else {
            setCheck(prevCheck => ({ ...prevCheck, title: false }))
        }

        if (formData.content == "") {
            return setCheck(prevCheck => ({ ...prevCheck, content: true }))
        } else {
            setCheck(prevCheck => ({ ...prevCheck, content: false }))
        }

        setCheck(prevCheck => ({ ...prevCheck, isLoading: true, err: false }))

        api.post("/posts/register", formData)
            .then(res => {
                if (res.data.status === 201) {
                    // console.log(res.data)
                    setFormData(prevFormData => ({ ...prevFormData, title: "", content: "" }))
                    setCheck(prevCheck => ({ ...prevCheck, isLoading: false, success: true }))

                    setTimeout(() => {
                        navigate("/myposts");
                    }, 1000);
                } else {
                    setCheck(prevCheck => ({ ...prevCheck, isLoading: false, isDuplicate: true, success: false }))
                }
            })
            .catch(error => {
                setCheck(prevCheck => ({ ...prevCheck, isLoading: false, err: true, success: false }))
            })
    }

    return (
        <div className="page">
            <Header user={props.user} />

            <div className="container">
                <h2 className="pageTitle">New Post</h2>

                <form className="mt-4" name="registerPost" id="registerPost">
                    <label htmlFor="title">Title:</label>
                    <input className={`${(check.title || check.isDuplicate) && 'border-red-500'}`} type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />

                    <label htmlFor="content">Content:</label>
                    <textarea className={`${(check.content || check.isDuplicate) && 'border-red-500'}`} id="content" name="content" value={formData.content} onChange={handleChange} required cols="30" rows="10"></textarea>


                    {(check.isDuplicate) && <p className="text-red-500">Duplicate title...</p>}
                    {(check.err) && <p className="text-red-500">There was an error, please try again later.</p>}
                    {(check.isLoading) && <div className="flex justify-center"><div className="lds-roller invert"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>}
                    {(check.success) && <p className="text-green-500">Registered successfully!</p>}

                    <button className="btnPost" type="submit" onClick={registerPost}>Submit</button>
                </form>
            </div>
            
            <Footer />
        </div>
    )
}