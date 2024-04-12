import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../store/Slice/postSlice.js'
import { Link } from 'react-router-dom'


const Home = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    

    return (
        <div>
            <Link to="/add-post">Ajouter un Post</Link>
            <h2>Liste des Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
