import React from 'react'
import posts from '../fixtures'
import PostList from "./PostList";
import 'bootstrap/dist/css/bootstrap.css' //подключение стилей

function App() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-3">
                    Posts
                </h1>
            </div>
            <PostList posts={posts}/>
        </div>
    )

}


export default App