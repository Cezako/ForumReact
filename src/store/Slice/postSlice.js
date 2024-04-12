import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
    }
)

export const addPost = createAsyncThunk(
    'posts/addPost',
    async (postData) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData)
        console.log(response.data)
        return response.data
    }
)

export const addCommentByPostId = createAsyncThunk(
    'posts/addCommentByPostId',
    async ({ postId, commentData }) => {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, commentData)
        console.log(response.data)
        return response.data
    }
)


const postSlice = createSlice({
    name: 'posts',
    initialState: {
        selectedPost: { comments: [] },
        posts: [],
    },
    reducers: {
        //error correspondance non trouvé, je ne sais pas pourquoi.
        selectPost(state, action) {
            const postId = action.payload
            const selectedPost = state.posts.find(post => post.id === postId)
            state.selectedPost = selectedPost || { comments: [] }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = mergePosts(state.posts, action.payload)
        })
        .addCase(addPost.fulfilled, (state, action) => {
            const newPost = {
                body: action.payload.body,
                id: state.posts.length + 1,
                title: action.payload.title,
                userID: 1
            }
            state.posts.unshift(newPost)
        })
        .addCase(addCommentByPostId.fulfilled, (state, action) => {
            const { postId, comment } = action.payload
            const postIndex = state.posts.findIndex(post => post.id === postId)
            if (postIndex !== -1) {
                state.posts[postIndex].comments.push(comment)
            }
        })
    }
})


// keep old post if ID exist
const mergePosts = (existingPosts, newPosts) => {
    const updatedPosts = [...existingPosts]
    newPosts.forEach(newPost => {
        const existingPostIndex = existingPosts.findIndex(post => post.id === newPost.id)
        if (existingPostIndex === -1) {
            updatedPosts.push(newPost);
        } else {
            updatedPosts[existingPostIndex] = newPost
        }
    })
    return updatedPosts
}


export const { selectPost } = postSlice.actions

export default postSlice.reducer
