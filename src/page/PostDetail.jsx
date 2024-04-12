import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectPost } from '../store/Slice/postSlice.js'
import { addCommentByPostId } from '../store/Slice/postSlice.js'
import AddCommentForm from '../component/form/AddCommentForm.jsx'


const PostDetail = () => {
    const { postId } = useParams()
    const dispatch = useDispatch()
    const post = useSelector(state => state.posts.selectedPost)

    useEffect(() => {
        dispatch(selectPost(postId))
        console.log(postId)
    }, [dispatch, postId])

    const handleAddComment = (comment) => {
        dispatch(addCommentByPostId({ postId, comment }))
    }

    return (
        <div>
            <h2>Détails du Post</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <h4>Commentaires</h4>
            <ul>
                {post.comments.map(comment => (
                    <li key={comment.id}>{comment.body}</li>
                ))}
            </ul>
            <AddCommentForm onSubmit={handleAddComment} />
            <Link to="/">Retour à la liste des posts</Link>
        </div>
    )
}

export default PostDetail
