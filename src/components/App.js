import React from 'react'
import posts from '../fixtures'
import PostList from "./PostList";

function App() {
   return(
    <div>
        <h1>
            Posts
        </h1>
        <PostList posts = {posts}/> //передаем как props в PostList
    </div>
   )

}


 export default App