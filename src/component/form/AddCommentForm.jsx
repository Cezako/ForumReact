
import React, { useState } from 'react'


const AddCommentForm = ({ onSubmit }) => {
    const [comment, setComment] = useState('')

    const handleChange = (e) => {
        setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(comment)
        setComment('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={comment} onChange={handleChange} />
            <button type="submit">Ajouter Commentaire</button>
        </form>
    )
}


export default AddCommentForm
