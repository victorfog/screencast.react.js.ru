import React, {Component} from 'react'
import posts from '../fixtures'
import PostList from "./PostList"; //перенесен в папку с однименным названием (так как имя папки совпадает он автоматичеки найдет каталог и будет искать в нет index.js рефакторинг не требуется ( толоко пути импорта иногда )
import 'bootstrap/dist/css/bootstrap.css' //подключение стилей

class App extends Component {
    state = {
        reverted: false
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        Posts
                        <button className="btn" onClick={this.revert}>Reverted</button>
                    </h1>
                </div>
                <PostList posts={this.state.reverted ? posts.reverse() : posts}/>
            </div>
        )//<!//если reverted правда посты переворачиваются -->
    }
    revert = () => this.setState({
        reverted: !this.state.reverted // тупо меняет состояние на противоположное
    })
}

export default App