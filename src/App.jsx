import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/Home.jsx'
import PostDetail from './page/PostDetail.jsx'
import AddPostForm from './component/form/AddPostForm.jsx'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/add-post" element={<AddPostForm />} />
      </Routes>
    </Router>
  )
}

export default App