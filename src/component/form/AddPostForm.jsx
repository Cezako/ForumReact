import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../../store/Slice/postSlice.js'
import { Link } from 'react-router-dom'


const AddPostForm = () => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [authorID, setAuthorID] = useState(1)
    const [body, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addPost({ title, authorID, body }))
        setTitle('')
        setBody('')
    }

    return (
        <div>
            <Link to="/">Retour à la liste des posts</Link>
            <h2>Ajouter un Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Titre :</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="body">Msg :</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}


export default AddPostForm
