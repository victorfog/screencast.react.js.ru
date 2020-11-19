import React from 'react'
import Article from "./Article"
import posts from '../fixtures'

function App() {
   return(
    <div>
        <h1>
            Post
        </h1>
        <Article post = {posts[0]}/>
    </div>
   )

}


 export default App