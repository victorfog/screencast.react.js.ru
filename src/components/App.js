import React from 'react'
import posts from '../fixtures'
import PostList from "./PostList"; //перенесен в папку с однименным названием (так как имя папки совпадает он автоматичеки найдет каталог и будет искать в нет index.js рефакторинг не требуется ( толоко пути импорта иногда )
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